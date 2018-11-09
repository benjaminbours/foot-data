import fs from "fs";
import * as phantom from "phantom";

async function getPageContent(url: string) {

    const instance: phantom.PhantomJS = await phantom.create();
    const page: phantom.WebPage = await instance.createPage();
    const status: string = await page.open(url);
    const content = await page.property("content");
    // console.log(content);
    const evaluate = await page.evaluate(() => {
        // console.log("YO");
    });
    fs.writeFile("arsenal.html", content, async (err) => {
        if (err) {
            throw err;
        }
        console.log("Saved!");
        await instance.exit();
    });
    page.on("onLoadFinished", async () => {
        // console.log(content);
    });
}

getPageContent("https://www.transfermarkt.com/fc-arsenal/kader/verein/11/saison_id/2018/plus/1");
