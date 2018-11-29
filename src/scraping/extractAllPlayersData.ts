import fs from "fs";
import path from "path";
import { extractPlayerData } from "./extractPlayerData";

const playersHTMLFolder = path.join(__dirname, "../../html/players");
const distDirectory = path.join(__dirname, "../../data/players");

const teamsRepo = fs.readdirSync(playersHTMLFolder);

async function extractAllPlayersData() {
    for (const teamRepo of teamsRepo) {
        const players = fs.readdirSync(`${playersHTMLFolder}/${teamRepo}`);
        // if (teamRepo !== "watford-fc") {
        //     continue;
        // }
        console.log(teamRepo);
        if (!fs.existsSync(`${distDirectory}/${teamRepo}`)) {
            fs.mkdirSync(`${distDirectory}/${teamRepo}`);
        }

        await extractAllPlayersDataInTeam(players, teamRepo);
    }
}

async function extractAllPlayersDataInTeam(players, teamRepo) {
    for (const player of players) {
        console.log(player);
        const filePath = `${playersHTMLFolder}/${teamRepo}/${player}`;
        const distPath = `${distDirectory}/${teamRepo}/${player.split(".")[0]}.json`;

        await extractPlayerData(filePath, distPath);
    }
}

extractAllPlayersData();
