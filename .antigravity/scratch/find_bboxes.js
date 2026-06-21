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

const images = [
  "HWD_Section_1.png",
  "HWD_Section_2.png",
  "HWD_Section_3.png",
  "HWD_Section_4.png",
  "HWD_Section_5.png",
  "HWD_Section_6.png",
  "HWD_Section_7.png"
];

(async () => {
  try {
    const browser = await puppeteer.launch({ executablePath, headless: true });
    const page = await browser.newPage();

    await page.setContent(`
      <html>
        <body>
          <canvas id="canvas"></canvas>
          <script>
            window.getBoundingBox = function(imgSrc) {
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

                  let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
                  let hasContent = false;

                  for (let y = 0; y < img.height; y++) {
                    for (let x = 0; x < img.width; x++) {
                      const alphaIdx = (y * img.width + x) * 4 + 3;
                      if (data[alphaIdx] > 5) { // alpha > ~2%
                        hasContent = true;
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                      }
                    }
                  }

                  resolve({
                    w: img.width,
                    h: img.height,
                    hasContent,
                    bbox: hasContent ? { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 } : null
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

    for (const imgName of images) {
      const imgPath = path.join("c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver", imgName);
      const base64Img = fs.readFileSync(imgPath).toString('base64');
      const dataUrl = `data:image/png;base64,${base64Img}`;

      const res = await page.evaluate(async (url) => {
        return await window.getBoundingBox(url);
      }, dataUrl);

      console.log(`${imgName}: file=${res.w}x${res.h}, bbox=x:${res.bbox?.x} y:${res.bbox?.y} w:${res.bbox?.w} h:${res.bbox?.h}`);
    }

    await browser.close();
  } catch (err) {
    console.error("Error:", err);
  }
})();
