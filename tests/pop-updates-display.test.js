const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest =
  'file://' +
  __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') +
  '/../dist/index.html';

let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get(fileUnderTest);
});

afterAll(async () => {
  await driver.quit();
});

test('After pushing then popping, the display shows the new top or n/a', async () => {
  const display = await driver.findElement(By.id('top_of_stack'));

  // Initially n/a
  expect(await display.getText()).toBe('n/a');

  // Push: click button and fill prompt
  const pushBtn = await driver.findElement(By.id('push'));
  await pushBtn.click();
  const prompt = await driver.switchTo().alert();
  await prompt.sendKeys('HELLO');
  await prompt.accept();

  // Display should show HELLO
  await driver.wait(until.elementTextIs(display, 'HELLO'), 2000);

  // Pop the item (alert appears)
  const popBtn = await driver.findElement(By.id('pop'));
  await popBtn.click();
  const alert = await driver.switchTo().alert();
  const removed = await alert.getText();
  expect(removed).toMatch(/HELLO/);
  await alert.accept();

  // Expectation: display updates to 'n/a' (because stack is now empty)
  await driver.wait(until.elementTextIs(display, 'n/a'), 2000); // <-- will FAIL until we fix UI
});

