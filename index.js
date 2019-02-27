const puppeteer = require('puppeteer');
const fetch = require("node-fetch");
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.reddit.com/r/memes/')

    const tacos = await page.evaluate((arr) => {
        const filter = Array.prototype.filter
        const allImages = document.querySelectorAll('img')
        const memes = filter.call(allImages, (image) => {
            return image.classList[1] === 'media-element'
        }).map((data) => data.src.replace('amp;s', 's'))
        return memes
    })
    let blobs = []
    for (taco in tacos) {
        const url = tacos[taco]
        blobs.push(await fetch(url).then(r => r.blob()))
    }
    await browser.close()

})()

