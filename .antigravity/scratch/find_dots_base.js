const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  path.join(process.env.LOCALAPPDATA, 'Google\\Chrome\\Application\\chrome.exe')
];

let executablePath = '';
for (const p of CHROME_PATHS) {
  if (fs.existsSync(p)) {
    executablePath = p;
    break;
  }
}

if (!executablePath) {
  console.error("Google Chrome not found on this system!");
  process.exit(1);
}

const imgPath = "c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver\\how-we-deliver-base-object.png";

if (!fs.existsSync(imgPath)) {
  console.error("Image file does not exist at:", imgPath);
  process.exit(1);
}

const base64Img = fs.readFileSync(imgPath).toString('base64');
const dataUrl = `data:image/png;base64,${base64Img}`;

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath,
      headless: true
    });
    const page = await browser.newPage();

    await page.setContent(`
      <html>
        <body>
          <canvas id="canvas"></canvas>
          <script>
            window.analyzeImage = function(imgSrc) {
              return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = function() {
                  const canvas = document.getElementById('canvas');
                  canvas.width = img.width;
                  canvas.height = img.height;
                  const ctx = canvas.getContext('2d');
                  ctx.drawImage(img, 0, 0);

                  const imgData = ctx.getImageData(0, 0, img.width, img.height);
                  const data = imgData.data;

                  const markers = [];
                  for (let y = 0; y < img.height; y++) {
                    for (let x = 0; x < img.width; x++) {
                      const idx = (y * img.width + x) * 4;
                      const r = data[idx];
                      const g = data[idx + 1];
                      const b = data[idx + 2];
                      const a = data[idx + 3];

                      // Look for highly saturated non-neutral pixels (e.g. red, green, blue)
                      // that might serve as alignment markers
                      if (a > 0) {
                        // Check if it's a marker (e.g., pure red, pure blue, etc.)
                        const isRed = r > 200 && g < 50 && b < 50;
                        const isGreen = g > 200 && r < 50 && b < 50;
                        const isBlue = b > 200 && r < 50 && g < 50;
                        const isMagenta = r > 200 && b > 200 && g < 50;
                        if (isRed || isGreen || isBlue || isMagenta) {
                          markers.push({ x, y, color: isRed ? 'red' : (isGreen ? 'green' : (isBlue ? 'blue' : 'magenta')) });
                        }
                      }
                    }
                  }

                  // Cluster pixels by spatial proximity
                  const clusters = [];
                  for (const p of markers) {
                    let added = false;
                    for (const c of clusters) {
                      const dist = Math.sqrt(Math.pow(p.x - c[0].x, 2) + Math.pow(p.y - c[0].y, 2));
                      if (dist < 30) {
                        c.push(p);
                        added = true;
                        break;
                      }
                    }
                    if (!added) {
                      clusters.push([p]);
                    }
                  }

                  const centroids = clusters.map((c, i) => {
                    const sumX = c.reduce((sum, p) => sum + p.x, 0);
                    const sumY = c.reduce((sum, p) => sum + p.y, 0);
                    const cx = sumX / c.length;
                    const cy = sumY / c.length;
                    const pctX = (cx / img.width) * 100;
                    const pctY = (cy / img.height) * 100;
                    return {
                      id: i + 1,
                      color: c[0].color,
                      cx,
                      cy,
                      pctX,
                      pctY,
                      size: c.length
                    };
                  });

                  // Sort by color, then by position
                  resolve({
                    width: img.width,
                    height: img.height,
                    centroids
                  });
                };
                img.onerror = reject;
                img.src = imgSrc;
              });
            };
          </script>
        </body>
      </html>
    `);

    const result = await page.evaluate(async (url) => {
      return await window.analyzeImage(url);
    }, dataUrl);

    console.log("ANALYSIS_RESULT_START");
    console.log(JSON.stringify(result, null, 2));
    console.log("ANALYSIS_RESULT_END");

    await browser.close();
  } catch (err) {
    console.error("Error analyzing image:", err);
  }
})();
