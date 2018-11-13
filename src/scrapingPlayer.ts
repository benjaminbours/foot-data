import fs from "fs";
// import path from "path";
import * as phantom from "phantom";

export async function getPageContent(url: string, name: string, folderPath: string) {
    const instance: phantom.PhantomJS = await phantom.create();
    const page: phantom.WebPage = await instance.createPage();
    const status: string = await page.open(url);
    const content = await page.property("content");
    const evaluate = await page.evaluate(() => {
        // console.log("YO");
    });
    fs.writeFile(`${folderPath}/${name}.html`, content, async (err) => {
        if (err) {
            throw err;
        }
        console.log("Saved!");
        await instance.exit();
    });

    // const evaluate = await page.evaluate(() => console.log("yo"));
    // page.on("onLoadFinished", async () => {
    //     // fs.writeFile(`${name}.html`, content, async (err) => {
    //     //     if (err) {
    //     //         throw err;
    //     //     }
    //     //     console.log("Saved!");
    //     //     await instance.exit();
    //     // });
    //     fs.writeFile(path.join(__dirname, `../html/players/${name}.html`), content, async (err) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log("Saved!");
    //         await instance.exit();
    //     });
    // });
}

// getPageContent("https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/leistungsdatendetails/spieler/58864/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1");
