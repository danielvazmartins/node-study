'use strict'

const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:4200';

(async () => {
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto(pageUrl);

    sleep(20000)
    /*await setTimeout(() => {
        page.screenshot({path: 'monitor.png'})
    },5000)*/
    await page.screenshot({path: 'monitor.png'});
    await browser.close();
})();

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
};