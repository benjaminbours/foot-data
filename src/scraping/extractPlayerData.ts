import fs from "fs";
import { JSDOM } from "jsdom";
import { IDayMatchData, IPlayerMatchData, PlayerStatus } from "../../types";

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

        const isOnTheBench = rowContent.includes("on the bench");
        const isNotInSquad = rowContent.includes("Not in squad");
        const isInjured = row.innerHTML.includes("verletzt-table");
        const isInSecondTeam = rowContent.includes("With 2nd team");
        const isRedSuspended = rowContent.includes("Red card suspension");
        const isYellowSuspended = rowContent.includes("Yellow card suspension");
        const isInU21 = rowContent.includes("With U21");
        const isInInternational = rowContent.includes("international match");
        const hasNoInfo = rowContent.includes("No information available");
        const hasIndirectCardSuspension = rowContent.includes("Indirect card suspension");
        const isNoEligible = rowContent.includes("No eligibility");

        let playerStatus;

        switch (true) {
            case isOnTheBench:
                playerStatus = PlayerStatus.ON_THE_BENCH;
                break;
            case isNotInSquad:
                playerStatus = PlayerStatus.NOT_IN_SQUAD;
                break;
            case isInjured:
                playerStatus = PlayerStatus.INJURED;
                break;
            case isInSecondTeam:
                playerStatus = PlayerStatus.SECOND_TEAM;
                break;
            case isRedSuspended:
                playerStatus = PlayerStatus.RED_CARD_SUSPENSION;
                break;
            case isInU21:
                playerStatus = PlayerStatus.WITH_U21;
                break;
            case hasNoInfo:
                playerStatus = PlayerStatus.NO_INFORMATION;
                break;
            case isInInternational:
                playerStatus = PlayerStatus.INTERNATIONAL;
                break;
            case hasIndirectCardSuspension:
                playerStatus = PlayerStatus.INDIRECT_SUSPENSION;
                break;
            case isYellowSuspended:
                playerStatus = PlayerStatus.YELLOW_CARD_SUSPENSION;
                break;
            case isNoEligible:
                playerStatus = PlayerStatus.NO_ELIGIBLE;
                break;
        }

        if (
            isOnTheBench ||
            isNotInSquad ||
            isInjured ||
            isInSecondTeam ||
            isRedSuspended ||
            isInU21 ||
            hasNoInfo ||
            isInInternational ||
            hasIndirectCardSuspension ||
            isYellowSuspended ||
            isNoEligible
        ) {
            return matchData = {
                day,
                date,
                homeTeam,
                homeTeamRanking,
                awayTeam,
                awayTeamRanking,
                result,
                playerStatus,
                stats: null,
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
            playerStatus: PlayerStatus.PLAYED,
            stats: {
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
    const data = fs.readFileSync(filePath);
    const dom = new JSDOM(data);
    const boxes = dom.window.document.querySelectorAll(".box");

    const table = searchForPremierLeagueTable(boxes);
    if (table) {
        // console.log(table.textContent);
        const obj = parsePremierLeagueTable(table);
        const json = JSON.stringify(obj);
        fs.writeFileSync(distPath, json);
        console.log("saved");
    } else {
        console.log("no premier league table");
        return;
    }
}
