import fs from "fs";
import { JSDOM } from "jsdom";

interface IPlayerData {
    shirtNumber: number;
    name: string;
    mainPosition: string;
    dateOfBirth: string;
    age: number;
    height: string;
    foot: string;
    joined: string;
    contractUntil: string;
    marketValue: string;
}

fs.readFile("arsenal.html", (err, data) => {
    const dom = new JSDOM(data);
    const tables = dom.window.document.querySelectorAll("table");
    const tableCurrentSeason = tables[1];

    const rows: [] = Array.prototype.slice.call(tableCurrentSeason.querySelectorAll("tbody tr.odd, tbody tr.even"));

    const arrRowContent = rows.map((row: HTMLElement) => {
        const cells = row.querySelectorAll("td");

        const shirtNumber = Number(cells[0].textContent);

        const nameSplit = (cells[1].querySelectorAll("tr")[0].textContent as string).split(" ");
        const name = nameSplit[nameSplit.length - 1];

        const mainPosition = cells[1].querySelectorAll("tr")[1].textContent as string;

        const dateAge = (cells[5].textContent as string).split("(");
        const dateOfBirth = dateAge[0].slice(0, -1);
        const age = Number(dateAge[1].slice(0, -1));

        const height = cells[7].textContent as string;

        const foot = cells[8].textContent as string;

        const joined = cells[9].textContent as string;

        const contractUntil = cells[11].textContent as string;

        const marketValue = (cells[12].textContent as string).slice(0, -2);

        const playerData: IPlayerData = {
            shirtNumber,
            name,
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

    const obj = {
        arrRowContent,
    };

    const json = JSON.stringify(obj);
    fs.writeFile("arsenal.json", json, () => {
        console.log("yo");
    });

    console.log(arrRowContent);

});
