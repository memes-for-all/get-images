const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch(debugJson)
    const page = await browser.newPage()
    
    await page.goto('https://www.reddit.com/r/memes/')

    page.evaluate(() => {

    })
})()

// document.querySelectorAll('img').forEach((data) =>  { 
//     if (data.classList[1] === 'media-element')
//         console.log(data.src)})
    