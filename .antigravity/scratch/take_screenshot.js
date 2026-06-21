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
    // Find the section element containing 'HOW WE DELIVER'
    const section = await page.evaluateHandle(() => {
      const headings = Array.from(document.querySelectorAll('h2'));
      const deliveryHeading = headings.find(h => h.textContent.includes('HOW WE DELIVER'));
      return deliveryHeading ? deliveryHeading.closest('section') : null;
    });

    if (section && section.asElement()) {
      console.log("Found HowWeDeliver section. Taking screenshot of section...");
      // Scroll into view
      await page.evaluate(el => el.scrollIntoView(), section);
      // Wait a moment for animations
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const screenshotPath = path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'how_we_deliver_capture.png');
      await section.asElement().screenshot({ path: screenshotPath });
      console.log("Screenshot saved to:", screenshotPath);
    } else {
      console.log("HowWeDeliver section not found, taking full page screenshot instead...");
      await page.screenshot({ path: path.join('C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\c7a1e2ba-ee37-4371-b5ac-aecb2f1d9a4f', 'full_page.png') });
    }

    await browser.close();
  } catch (err) {
    console.error("Screenshot error:", err);
  }
})();
