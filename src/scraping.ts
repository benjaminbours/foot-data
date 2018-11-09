import fs from "fs";
import * as phantom from "phantom";

async function getPageContent(url: string) {

    const instance: phantom.PhantomJS = await phantom.create();
    const page: phantom.WebPage = await instance.createPage();
    const status: string = await page.open(url);
    const content = await page.property("content");
    const evaluate = await page.evaluate(() => console.log("yo"));
    page.on("onLoadFinished", async () => {
        fs.writeFile("player.html", content, async (err) => {
            if (err) {
                throw err;
            }
            console.log("Saved!");
            await instance.exit();
        });
    });
}

getPageContent("https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/leistungsdatendetails/spieler/58864/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1");
