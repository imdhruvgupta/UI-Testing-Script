require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', () => {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on google', async () => {
        await driver.get('https://google.com');

        // Enter keywords and click enter
        await driver.findElement(By.name('q')).sendKeys('Coding Blocks', Key.RETURN);

        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        
        let title = await driver.getTitle();
        assert.equal(title, 'Coding Blocks - Google Search');

    });

    after(() => driver && driver.quit());
})
