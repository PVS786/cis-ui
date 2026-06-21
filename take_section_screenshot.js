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
    height: 1200,
    deviceScaleFactor: 1,
  });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait a moment for any lazy loading images or render animations
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Finding How We Deliver section...');
  const sections = await page.$$('section');
  let hwdSection = null;
  for (const section of sections) {
    const text = await page.evaluate(el => el.textContent, section);
    if (text.includes('HOW WE DELIVER')) {
      hwdSection = section;
      break;
    }
  }

  if (hwdSection) {
    console.log('Found How We Deliver section! Scrolling it into view...');
    await page.evaluate(el => {
      el.scrollIntoView({ block: 'center' });
    }, hwdSection);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const screenshotPath = 'C:\\Users\\prajo\\.gemini\\antigravity-ide\\brain\\27367aee-6262-4554-8bf3-9c598fe9c0d0\\hwd_section_current.png';
    console.log(`Taking page screenshot and saving to: ${screenshotPath}`);
    await page.screenshot({
      path: screenshotPath
    });
    console.log('Page screenshot taken successfully!');
  } else {
    console.error('How We Deliver section not found!');
  }

  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
