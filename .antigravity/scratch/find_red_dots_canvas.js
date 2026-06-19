const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

// Standard Windows Google Chrome paths
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

const imgPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\630cf832-51e3-4bf3-b0ed-bd1db53db657\\media__1781878886711.jpg";

if (!fs.existsSync(imgPath)) {
  console.error("Image file does not exist at:", imgPath);
  process.exit(1);
}

const base64Img = fs.readFileSync(imgPath).toString('base64');
const dataUrl = `data:image/jpeg;base64,${base64Img}`;

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath,
      headless: true
    });
    const page = await browser.newPage();

    // Set page content with image and canvas
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

                  const redPixels = [];
                  for (let y = 0; y < img.height; y++) {
                    for (let x = 0; x < img.width; x++) {
                      const idx = (y * img.width + x) * 4;
                      const r = data[idx];
                      const g = data[idx + 1];
                      const b = data[idx + 2];
                      const a = data[idx + 3];

                      // Robust red detection tolerating JPEG compression
                      if (r > 150 && r - g > 70 && r - b > 70) {
                        redPixels.push({ x, y });
                      }
                    }
                  }

                  // Cluster pixels
                  const clusters = [];
                  for (const p of redPixels) {
                    let added = false;
                    for (const c of clusters) {
                      // Check distance to the first pixel in the cluster - reduced to 12px to separate nearby markers
                      const dist = Math.sqrt(Math.pow(p.x - c[0].x, 2) + Math.pow(p.y - c[0].y, 2));
                      if (dist < 12) {
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
                      cx,
                      cy,
                      pctX,
                      pctY,
                      size: c.length
                    };
                  });

                  // Sort from top to bottom (by cy)
                  centroids.sort((a, b) => a.cy - b.cy);

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
