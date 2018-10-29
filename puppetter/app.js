'use strict'

const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:4200';

(async () => {
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();

    // Aguarda até que tenha 0 conexões ativas (nao funcionou muito bem)
    /*await page.goto(
        pageUrl, { 
            waitUntil: "networkidle0"
        }
    ).catch(error => {
        console.log('ERRO: ', error)
    })*/

    // Chama a pagina e aguarda um tempo fixo
    /*await page.goto(pageUrl)
    .catch(error => {
        console.log('ERRO: ', error)
    })
    await sleep(5000)*/

    // Chama a pagina e aguarda por um seletor
    await page.goto(pageUrl)
    await page.waitForSelector('.table-loaded', { timeout: 60000})
    .catch(error => {
        console.log('ERRO: ', error)
    })

    await page.screenshot({
        path: 'monitor.png',
        fullPage: true
    });
    await browser.close();
})();

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
};