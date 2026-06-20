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
    deviceScaleFactor: 1
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait 2s
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Find the HWD section and scroll to it
  console.log('Finding HWD section...');
  const hwdPosition = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    for (const sec of sections) {
      if (sec.textContent && sec.textContent.includes('HOW WE DELIVER')) {
        const rect = sec.getBoundingClientRect();
        return rect.top + window.pageYOffset;
      }
    }
    return null;
  });

  if (hwdPosition) {
    console.log(`Scrolling to HWD section at y=${hwdPosition}...`);
    await page.evaluate((y) => window.scrollTo(0, y - 50), hwdPosition);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Hover over Step 1 tab using Puppeteer page.evaluate to find coordinates and page.mouse.move
    console.log('Hovering over Step 1 tab...');
    const buttonCoords = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const btn01 = buttons.find(b => b.textContent && b.textContent.includes('01') && b.textContent.includes('Identification'));
      if (btn01) {
        const rect = btn01.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      }
      return null;
    });

    if (buttonCoords) {
      console.log(`Hovering over button coordinates: x=${buttonCoords.x}, y=${buttonCoords.y}`);
      await page.mouse.move(buttonCoords.x, buttonCoords.y);
      await new Promise(resolve => setTimeout(resolve, 1500));
    } else {
      console.log('Could not find button 01 coordinates!');
    }

    // Capture screenshot centered on HWD section map area
    const brainDir = 'C:\\Users\\prajo\\.gemini\\antigravity-ide\\brain\\27367aee-6262-4554-8bf3-9c598fe9c0d0\\scratch';
    console.log('Taking screenshot of hovered state...');
    await page.screenshot({
      path: `${brainDir}\\crop_hwd_step1_hover.png`,
      fullPage: false
    });
    console.log('Saved to crop_hwd_step1_hover.png');
  } else {
    console.log('HWD section not found!');
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
