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

const CAR = 1671 / 941;

// Define options to test
// Each option has { name, cx, cy, dw, active }
// active = true means hovered (cy is offset by -2.66%)
const options = [
  { name: '1_current_normal', cx: 12.5, cy: 80, dw: 25.5, active: false },
  { name: '1_current_hovered', cx: 12.5, cy: 80 - 2.66, dw: 25.5, active: true },
  
  { name: '2_shifted_normal', cx: 11.5, cy: 81, dw: 26.5, active: false },
  { name: '2_shifted_hovered', cx: 11.5, cy: 81 - 2.66, dw: 26.5, active: true },

  { name: '3_larger_normal', cx: 11.0, cy: 82, dw: 28.0, active: false },
  { name: '3_larger_hovered', cx: 11.0, cy: 82 - 2.66, dw: 28.0, active: true },

  { name: '4_custom_normal', cx: 10.5, cy: 81.5, dw: 27.5, active: false },
  { name: '4_custom_hovered', cx: 10.5, cy: 81.5 - 2.66, dw: 27.5, active: true },

  { name: '5_balanced_normal', cx: 11.0, cy: 81.0, dw: 27.0, active: false },
  { name: '5_balanced_hovered', cx: 11.0, cy: 81.0 - 2.66, dw: 27.0, active: true }
];

(async () => {
  try {
    const browser = await puppeteer.launch({ executablePath, headless: true });
    const page = await browser.newPage();

    const baseImgPath = "c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver\\how-we-deliver-base-object.png";
    const base64Base = fs.readFileSync(baseImgPath).toString('base64');
    
    const step7Path = "c:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\public\\how_we_deliver\\HWD_Section_7.png";
    const base64Step7 = fs.readFileSync(step7Path).toString('base64');

    // Create a page with canvas to render each option
    for (const opt of options) {
      await page.setContent(`
        <html>
          <body style="margin: 0; padding: 0;">
            <canvas id="canvas" style="width: 1671px; height: 941px;"></canvas>
            <script>
              window.renderOption = function(base64Base, base64Step7, opt, CAR) {
                return new Promise((resolve) => {
                  const canvas = document.getElementById('canvas');
                  canvas.width = 1671;
                  canvas.height = 941;
                  const ctx = canvas.getContext('2d');

                  const baseImg = new Image();
                  baseImg.onload = function() {
                    ctx.drawImage(baseImg, 0, 0, 1671, 941);

                    const stepImg = new Image();
                    stepImg.onload = function() {
                      // HWD_Section_7.png imgW: 2390, imgH: 1792
                      const imgW = 2390;
                      const imgH = 1792;
                      const dh = (opt.dw / (imgW / imgH)) * CAR;
                      const lpPct = opt.cx - opt.dw / 2;
                      const tpPct = opt.cy - dh / 2;

                      const x = (lpPct / 100) * 1671;
                      const y = (tpPct / 100) * 941;
                      const w = (opt.dw / 100) * 1671;
                      const h = (dh / 100) * 941;

                      // Highlight options to see boundaries if needed
                      ctx.drawImage(stepImg, x, y, w, h);
                      
                      // Draw red boundary box to see exact extent
                      ctx.strokeStyle = 'red';
                      ctx.lineWidth = 2;
                      ctx.strokeRect(x, y, w, h);

                      resolve();
                    };
                    stepImg.src = 'data:image/png;base64,' + base64Step7;
                  };
                  baseImg.src = 'data:image/png;base64,' + base64Base;
                });
              };
            </script>
          </body>
        </html>
      `);

      await page.evaluate(async (base64Base, base64Step7, opt, CAR) => {
        await window.renderOption(base64Base, base64Step7, opt, CAR);
      }, base64Base, base64Step7, opt, CAR);

      const canvasElement = await page.$('#canvas');
      const outPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', `test_opt_${opt.name}.png`);
      await canvasElement.screenshot({ path: outPath });
      console.log(`Saved screenshot for ${opt.name} to:`, outPath);
    }

    await browser.close();
  } catch (err) {
    console.error("Error:", err);
  }
})();
