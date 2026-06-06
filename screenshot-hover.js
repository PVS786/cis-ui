async function main() {
  const { default: puppeteer } = await import('puppeteer-core');
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
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

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight - 1200);
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Moving mouse to trigger hover on How We Deliver...');
  // Hover over the center of the first step hotspot (x: 0, y: 2, w: 21, h: 56)
  // Let's just hover over the first phase button at the bottom for an easier target!
  const phaseButton = await page.$('button:has-text("01")');
  if (phaseButton) {
    await phaseButton.hover();
  } else {
    // try to hover the hotspot
    await page.mouse.move(720, 600); // random middle-ish coordinate, hopefully triggers something
  }

  await new Promise(resolve => setTimeout(resolve, 1000));

  const screenshotPath = 'C:\\Users\\prajo\\.gemini\\antigravity-ide\\brain\\27367aee-6262-4554-8bf3-9c598fe9c0d0\\screenshot_hover.png';
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
