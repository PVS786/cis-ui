async function main() {
  const { default: puppeteer } = await import('puppeteer-core');
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set resolution to standard 1440x900 viewport
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Scroll to bottom to ensure footer is visible
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Wait a moment for any lazy loading images or render animations
  await new Promise(resolve => setTimeout(resolve, 3000));

  const screenshotPath = 'C:\\Users\\prajo\\.gemini\\antigravity-ide\\brain\\27367aee-6262-4554-8bf3-9c598fe9c0d0\\screenshot.png';
  console.log(`Taking screenshot and saving to: ${screenshotPath}`);
  await page.screenshot({
    path: screenshotPath,
    fullPage: false
  });

  console.log('Screenshot taken successfully!');
  await browser.close();
}

main().catch(err => {
  console.error('Error taking screenshot:', err);
  process.exit(1);
});
