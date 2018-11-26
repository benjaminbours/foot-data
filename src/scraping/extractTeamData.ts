import fs from "fs";
import { JSDOM } from "jsdom";
import path from "path";
import { IPlayer } from "../../types";
import slugify from "./slugify";

export async function extractTeamData(fileName: string, teamId: number) {
    fs.readFile(path.join(__dirname, `../../html/teams/${fileName}.html`), (err, data) => {
        const dom = new JSDOM(data);
        const tables = dom.window.document.querySelectorAll("table");
        const tableCurrentSeason = tables[1];

        const rows: [] = Array.prototype.slice.call(tableCurrentSeason.querySelectorAll("tbody tr.odd, tbody tr.even"));

        const players = rows.map((row: HTMLElement) => {
            const cells = row.querySelectorAll("td");

            const shirtNumber = Number(cells[0].textContent);

            const nameDomElement = cells[1].querySelector(".spielprofil_tooltip.tooltipstered") as HTMLElement;

            const fullName = nameDomElement.textContent as string;
            const nameSplit = fullName.split(" ");
            const firstName = nameSplit[0];
            const lastName = nameSplit[1];
            const originId = Number(nameDomElement.id);
            const slugName = slugify(`${firstName}-${lastName}`);

            const mainPosition = cells[1].querySelectorAll("tr")[1].textContent as string;

            const dateAge = (cells[5].textContent as string).split("(");
            const dateOfBirth = dateAge[0].slice(0, -1);
            const age = Number(dateAge[1].slice(0, -1));

            const height = cells[7].textContent as string;

            const foot = cells[8].textContent as string;

            const joined = cells[9].textContent as string;

            const contractUntil = cells[11].textContent as string;

            const marketValue = (cells[12].textContent as string).slice(0, -2);

            const playerData: IPlayer = {
                shirtNumber,
                firstName,
                lastName,
                originId,
                slugName,
                mainPosition,
                dateOfBirth,
                age,
                height,
                foot,
                joined,
                contractUntil,
                marketValue,
            };
            return playerData;
        });

        // const obj = {
        //     players,
        //     // id: teamId,
        // };

        const json = JSON.stringify(players);
        fs.writeFile(path.join(__dirname, `../../data/teams/${fileName}.json`), json, () => {
            console.log("saved");
        });

    });
}
