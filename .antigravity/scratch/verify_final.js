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

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath,
      headless: true,
      defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();
    
    console.log("Navigating to http://localhost:3000...");
    await page.setCacheEnabled(false);
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    
    console.log("Page loaded. Scrolling to 'HOW WE DELIVER' section...");
    const section = await page.evaluateHandle(() => {
      const headings = Array.from(document.querySelectorAll('h2'));
      const deliveryHeading = headings.find(h => h.textContent.includes('HOW WE DELIVER'));
      return deliveryHeading ? deliveryHeading.closest('section') : null;
    });

    if (section && section.asElement()) {
      console.log("Found HowWeDeliver section. Scrolling into view...");
      await page.evaluate(el => el.scrollIntoView(), section);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 1. Take normal screenshot (Step 1 is active on load)
      const normalPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'verify_step1_active.png');
      await page.screenshot({ path: normalPath });
      console.log("Normal (Step 1 active) screenshot saved to:", normalPath);
      
      // 2. Hover over the Step 7 tab button to activate Step 7
      const buttons = await page.$$('button');
      let step7Btn = null;
      for (const btn of buttons) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text.includes('07')) {
          step7Btn = btn;
          break;
        }
      }

      if (step7Btn) {
        console.log("Hovering over Step 7 tab...");
        await step7Btn.hover();
      } else {
        console.log("Step 7 tab not found!");
      }

      // Wait for hover animation (lift and drop-shadow) to finish
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 3. Take hovered screenshot
      const hoverPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'verify_step7_active.png');
      await page.screenshot({ path: hoverPath });
      console.log("Hovered (Step 7 active) screenshot saved to:", hoverPath);
    } else {
      console.log("HowWeDeliver section not found.");
    }

    await browser.close();
  } catch (err) {
    console.error("Screenshot error:", err);
  }
})();
