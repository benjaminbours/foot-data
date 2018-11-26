import fs from "fs";
import path from "path";
import * as phantom from "phantom";

async function getPageContent(url: string) {
    const instance: phantom.PhantomJS = await phantom.create();
    const page: phantom.WebPage = await instance.createPage();
    const status: string = await page.open(url);
    const content = await page.property("content");
    const evaluate = await page.evaluate(() => {
        // console.log("YO");
    });
    fs.writeFile(path.join(__dirname, "../../html/competitions/premierLeague.html"), content, async (err) => {
        if (err) {
            throw err;
        }
        console.log("Saved!");
        await instance.exit();
    });
}

getPageContent("https://www.transfermarkt.com/premier-league/startseite/wettbewerb/GB1");
