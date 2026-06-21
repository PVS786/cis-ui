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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Let's find the 7th step button to hover it. The buttons have text starting with "07"
      // or we can find it by finding the button with text "07"
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
        console.log("Step 7 button not found, hovering at hotspot coordinate for step 7...");
        // Step 7 hotspot: hx: 0, hy: 55, hw: 32, hh: 45
        // Let's find the base image bounding rect and hover there
        const baseImg = await page.$('img[alt*="How We Deliver Base"]');
        if (baseImg) {
          const rect = await baseImg.boundingBox();
          if (rect) {
            // Hover near bottom-left of the image: x = rect.x + rect.width * 0.16, y = rect.y + rect.height * 0.77
            await page.mouse.move(rect.x + rect.width * 0.16, rect.y + rect.height * 0.77);
          }
        }
      }

      // Wait a moment for hover animations
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const screenshotPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'hover_step7.png');
      await section.asElement().screenshot({ path: screenshotPath });
      console.log("Hover screenshot saved to:", screenshotPath);
    } else {
      console.log("HowWeDeliver section not found.");
    }

    await browser.close();
  } catch (err) {
    console.error("Screenshot error:", err);
  }
})();
