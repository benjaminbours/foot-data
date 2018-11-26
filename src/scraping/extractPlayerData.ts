import fs from "fs";
import { JSDOM } from "jsdom";

export interface IPlayerMatchData {
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

export interface IDayMatchData {
    day: number;
    date: string;
    homeTeam: string;
    homeTeamRanking: number;
    awayTeam: string;
    awayTeamRanking: number;
    result: string;
    playerData: OnTheBench | NotInSquad | IPlayerMatchData;
}
export type OnTheBench = "on the bench";
export type NotInSquad = "not in squad";

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

function parsePremierLeagueTable(table: HTMLElement) {
    const rows: [] = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
    const matchesData: IDayMatchData[] = rows.map((row: HTMLElement) => {
        let matchData: IDayMatchData;
        const cells = row.querySelectorAll("td");

        const day = Number(cells[0].textContent);
        const date = cells[1].textContent as string;
        const homeTeamCell = (cells[3].textContent as string).split("(");
        const homeTeam = homeTeamCell[0].slice(0, -2);
        const homeTeamRanking = Number(homeTeamCell[1].split(".")[0]);
        const awayTeamCell = (cells[5].textContent as string).split("(");
        const awayTeam = awayTeamCell[0].slice(0, -2);
        const awayTeamRanking = Number(awayTeamCell[1].split(".")[0]);
        const result = (cells[6].textContent as string).slice(0, -1);

        const rowContent = row.textContent as string;
        if (rowContent.includes("on the bench")) {
            return matchData = {
                day,
                date,
                homeTeam,
                homeTeamRanking,
                awayTeam,
                awayTeamRanking,
                result,
                playerData: "on the bench",
            };
        }

        if (rowContent.includes("Not in squad")) {
            return matchData = {
                day,
                date,
                homeTeam,
                homeTeamRanking,
                awayTeam,
                awayTeamRanking,
                result,
                playerData: "not in squad",
            };
        }

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

        matchData = {
            day,
            date,
            homeTeam,
            homeTeamRanking,
            awayTeam,
            awayTeamRanking,
            result,
            playerData: {
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
            },
        };
        return matchData;
    });

    return {
        matchesData,
    };
}

function searchForPremierLeagueTable(boxes: NodeListOf<Element>): HTMLElement | false {
    let premierLeagueTable: HTMLElement | false = false;
    boxes.forEach((item, i) => {
        const isPremierLeagueBox = boxes[i].querySelector("a[name='GB1']");
        if (isPremierLeagueBox) {
            premierLeagueTable = boxes[i].querySelector("table") as HTMLElement;
        }
    });
    return premierLeagueTable;
}

export function extractPlayerData(filePath: string, distPath: string) {
    console.log(filePath);
    const data = fs.readFileSync(filePath);
    // fs.readFileSync(filePath, async (err, data) => {
    const dom = new JSDOM(data);
    const boxes = dom.window.document.querySelectorAll(".box");

    const table = searchForPremierLeagueTable(boxes);
    if (table) {
        const obj = parsePremierLeagueTable(table);
        const json = JSON.stringify(obj);
        fs.writeFileSync(distPath, json);
        console.log("saved");
    } else {
        console.log("no premier league table");
        return;
    }
    // });
}
