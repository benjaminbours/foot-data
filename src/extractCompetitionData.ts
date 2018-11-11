import fs from "fs";
import { JSDOM } from "jsdom";
import path from "path";

export interface IClubData {
    name: string;
    shortName: string;
    slugName: string;
    id: number;
    squad: number;
    age: number;
    foreigners: number;
    totalMarketValue: string;
    averageMarketValue: string;
}

fs.readFile(path.join(__dirname, "../html/competitions/premierLeague.html"), (err, data) => {
    const dom = new JSDOM(data);
    const table = dom.window.document.querySelector("#yw1") as HTMLElement;
    const rows: [] = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));

    const arrRowContent: IClubData[] = rows.map((row: HTMLElement) => {
        const cells = row.querySelectorAll("td");
        const id = Number((cells[1].querySelector("a") as HTMLElement).id);
        let name = (cells[1].textContent as string).slice(0, -1);
        while (name.charAt(name.length - 1) === " ") {
            name = name.slice(0, -1);
        }
        const shortName = cells[2].textContent as string;
        const slugName = name.toLowerCase().replace(/ /g, "-").replace(/&/g, "amp");
        const squad = Number(cells[3].textContent);
        const age = Number((cells[4].textContent as string).replace(",", "."));
        const foreigners = Number(cells[5].textContent);
        const totalMarketValue = cells[6].textContent as string;
        const averageMarketValue = cells[7].textContent as string;
        const clubData: IClubData = {
            name,
            shortName,
            slugName,
            id,
            squad,
            age,
            foreigners,
            totalMarketValue,
            averageMarketValue,
        };
        return clubData;
    });

    const premierLeague = {
        teams: arrRowContent,
    };

    const json = JSON.stringify(premierLeague);
    fs.writeFile(path.join(__dirname, "../data/competitions/premierLeague.json"), json, () => {
        console.log("saved");
    });

});
