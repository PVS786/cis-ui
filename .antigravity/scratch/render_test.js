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

// Aspect ratio CAR = 1671 / 941
const CAR = 1671 / 941;

function tlCorner(cx, cy, dw, imgW, imgH) {
  const dh = (dw / (imgW / imgH)) * CAR;
  return { lp: cx - dw / 2, tp: cy - dh / 2, dw, dh };
}

// Coordinates to test
const steps = [
  {
    id: 1,
    imagePath: 'HWD_Section_1.png',
    imgW: 1672, imgH: 941,
    cx: 13.5, cy: 16, dw: 34, // testing cx: 13.5
  },
  {
    id: 2,
    imagePath: 'HWD_Section_2.png',
    imgW: 1457, imgH: 1079,
    cx: 44, cy: 16, dw: 30,
  },
  {
    id: 3,
    imagePath: 'HWD_Section_3.png',
    imgW: 1448, imgH: 1086,
    cx: 77, cy: 16, dw: 25.5,
  },
  {
    id: 4,
    imagePath: 'HWD_Section_4.png',
    imgW: 1448, imgH: 1086,
    cx: 92, cy: 52, dw: 25.5,
  },
  {
    id: 5,
    imagePath: 'HWD_Section_5.png',
    imgW: 1433, imgH: 941,
    cx: 77, cy: 80, dw: 29,
  },
  {
    id: 6,
    imagePath: 'HWD_Section_6.png',
    imgW: 1479, imgH: 941,
    cx: 44, cy: 80, dw: 30,
  },
  {
    id: 7,
    imagePath: 'HWD_Section_7.png',
    imgW: 2390, imgH: 1792,
    cx: 12.5, cy: 80, dw: 25.5, // testing cx: 12.5
  },
];

(async () => {
  try {
    const browser = await puppeteer.launch({ executablePath, headless: true });
    const page = await browser.newPage();

    // Read base image
    const baseImgPath = "c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver\\how-we-deliver-base-object.png";
    const base64Base = fs.readFileSync(baseImgPath).toString('base64');
    
    // Read block images
    const blockData = {};
    for (const step of steps) {
      const p = path.join("c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver", step.imagePath);
      blockData[step.id] = fs.readFileSync(p).toString('base64');
    }

    await page.setContent(`
      <html>
        <body>
          <canvas id="canvas" style="width: 1671px; height: 941px;"></canvas>
          <script>
            window.renderOverlay = function(base64Base, blockData, steps, CAR) {
              return new Promise((resolve) => {
                const canvas = document.getElementById('canvas');
                canvas.width = 1671;
                canvas.height = 941;
                const ctx = canvas.getContext('2d');

                const baseImg = new Image();
                baseImg.onload = async function() {
                  // Draw base
                  ctx.drawImage(baseImg, 0, 0, 1671, 941);

                  // Load and draw blocks in order
                  for (const step of steps) {
                    const blockImg = new Image();
                    await new Promise((resBlock) => {
                      blockImg.onload = function() {
                        // Compute positions in percentages
                        const dh = (step.dw / (step.imgW / step.imgH)) * CAR;
                        const lpPct = step.cx - step.dw / 2;
                        const tpPct = step.cy - dh / 2;

                        // Convert to pixels
                        const x = (lpPct / 100) * 1671;
                        const y = (tpPct / 100) * 941;
                        const w = (step.dw / 100) * 1671;
                        const h = (dh / 100) * 941;

                        ctx.drawImage(blockImg, x, y, w, h);
                        resBlock();
                      };
                      blockImg.src = 'data:image/png;base64,' + blockData[step.id];
                    });
                  }

                  resolve();
                };
                baseImg.src = 'data:image/png;base64,' + base64Base;
              });
            };
          </script>
        </body>
      </html>
    `);

    await page.evaluate(async (base64Base, blockData, steps, CAR) => {
      await window.renderOverlay(base64Base, blockData, steps, CAR);
    }, base64Base, blockData, steps, CAR);

    const canvasElement = await page.$('#canvas');
    const outPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'test_render.png');
    await canvasElement.screenshot({ path: outPath });
    console.log("Rendered image saved to:", outPath);

    await browser.close();
  } catch (err) {
    console.error("Error:", err);
  }
})();
