import fs from "fs";
import { JSDOM } from "jsdom";

export interface IPlayerMatchData {
    day: number;
    date: string;
    homeTeam: string;
    homeTeamRanking: number;
    awayTeam: string;
    awayTeamRanking: number;
    result: string;
    position: string;
    goals: number;
    assists: number;
    ownGoals: number;
    yellowCards: boolean;
    secondYellows: boolean;
    redCards: boolean;
    substitutedOn: number;
    substitutedOff: number;
    minutesPlayed: number;
}

export type Bench = "on the bench";

function getNumberInCell(cell: HTMLElement) {
    const content = cell.textContent as string;
    return content.length > 0 ? Number(content) : 0;
}

function getBooleanInCell(cell: HTMLElement) {
    const content = cell.textContent as string;
    return content.length > 0;
}

function getMinuteInCell(cell: HTMLElement) {
    const content = cell.textContent as string;
    return content.length > 0 ? Number(content.split("'")[0]) : 0;
}

fs.readFile("./html/players/artur-boruc.html", (err, data) => {
    const dom = new JSDOM(data);
    const boxes = dom.window.document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        const isPremierLeagueBox = boxes[i].querySelector("a[name='GB1']");
        if (isPremierLeagueBox) {
            const table = boxes[i].querySelector("table");
            if (table) {
                const rows: [] = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
                const matchesData: Array<IPlayerMatchData | Bench> = rows.map((row: HTMLElement) => {
                    const cells = row.querySelectorAll("td");
                    const rowContent = row.textContent as string;
                    if (rowContent.includes("on the bench")) {
                        return "on the bench";
                    }

                    const day = Number(cells[0].textContent);
                    const date = cells[1].textContent as string;

                    const homeTeamCell = (cells[3].textContent as string).split("(");
                    const homeTeam = homeTeamCell[0].slice(0, -2);
                    const homeTeamRanking = Number(homeTeamCell[1].split(".")[0]);

                    const awayTeamCell = (cells[5].textContent as string).split("(");
                    const awayTeam = awayTeamCell[0].slice(0, -2);
                    const awayTeamRanking = Number(awayTeamCell[1].split(".")[0]);

                    const result = (cells[6].textContent as string).slice(0, -1);

                    const position = cells[7].textContent as string;

                    const goals = getNumberInCell(cells[8]);
                    const assists = getNumberInCell(cells[9]);
                    const ownGoals = getNumberInCell(cells[10]);
                    const yellowCards = getBooleanInCell(cells[11]);
                    const secondYellows = getBooleanInCell(cells[12]);
                    const redCards = getBooleanInCell(cells[13]);

                    const substitutedOn = getMinuteInCell(cells[14]);
                    const substitutedOff = getMinuteInCell(cells[15]);
                    const minutesPlayed = getMinuteInCell(cells[16]);

                    const matchData: IPlayerMatchData = {
                        day,
                        date,
                        homeTeam,
                        homeTeamRanking,
                        awayTeam,
                        awayTeamRanking,
                        result,
                        position,
                        goals,
                        assists,
                        ownGoals,
                        yellowCards,
                        secondYellows,
                        redCards,
                        substitutedOn,
                        substitutedOff,
                        minutesPlayed,
                    };
                    return matchData;
                });

                const obj = {
                    matchesData,
                };

                const json = JSON.stringify(obj);
                fs.writeFile("player.json", json, () => {
                    console.log("yo");
                });
                return;
            }
        }
    }
    // const tableCurrentSeason = tables[0];
    // console.log(tableCurrentSeason);
    // if (!tableCurrentSeason) {
    //     return;
    // }
    // const rows: [] = Array.prototype.slice.call(tableCurrentSeason.querySelectorAll("tbody tr"));

    // const arrRowContent: IPlayerMatchData[] = rows.map((row: HTMLElement) => {
    //     const cells = row.querySelectorAll("td");

    //     const day = Number(cells[0].textContent);
    //     const date = cells[1].textContent as string;

    //     const homeTeamCell = (cells[3].textContent as string).split("(");
    //     const homeTeam = homeTeamCell[0].slice(0, -2);
    //     const homeTeamRanking = Number(homeTeamCell[1].split(".")[0]);

    //     const awayTeamCell = (cells[5].textContent as string).split("(");
    //     const awayTeam = awayTeamCell[0].slice(0, -2);
    //     const awayTeamRanking = Number(awayTeamCell[1].split(".")[0]);

    //     const result = (cells[6].textContent as string).slice(0, -1);

    //     const position = cells[7].textContent as string;

    //     const goals = getNumberInCell(cells[8]);
    //     const assists = getNumberInCell(cells[9]);
    //     const ownGoals = getNumberInCell(cells[10]);
    //     const yellowCards = getBooleanInCell(cells[11]);
    //     const secondYellows = getBooleanInCell(cells[12]);
    //     const redCards = getBooleanInCell(cells[13]);

    //     const substitutedOn = getMinuteInCell(cells[14]);
    //     const substitutedOff = getMinuteInCell(cells[15]);
    //     const minutesPlayed = getMinuteInCell(cells[16]);

    //     const matchData: IPlayerMatchData = {
    //         day,
    //         date,
    //         homeTeam,
    //         homeTeamRanking,
    //         awayTeam,
    //         awayTeamRanking,
    //         result,
    //         position,
    //         goals,
    //         assists,
    //         ownGoals,
    //         yellowCards,
    //         secondYellows,
    //         redCards,
    //         substitutedOn,
    //         substitutedOff,
    //         minutesPlayed,
    //     };
    //     return matchData;
    // });

    // const obj = {
    //     arrRowContent,
    // };

    // const json = JSON.stringify(obj);
    // fs.writeFile("player.json", json, () => {
    //     console.log("yo");
    // });

    // console.log(arrRowContent);

});
