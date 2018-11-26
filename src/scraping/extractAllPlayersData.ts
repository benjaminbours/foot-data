import fs from "fs";
import path from "path";
import { extractPlayerData } from "./extractPlayerData";

const playersHTMLFolder = path.join(__dirname, "../html/players");
const distDirectory = path.join(__dirname, "../data/players");

const teamsRepo = fs.readdirSync(playersHTMLFolder);

async function extractAllPlayersData() {
    for (const teamRepo of teamsRepo) {
        const players = fs.readdirSync(`${playersHTMLFolder}/${teamRepo}`);
        if (teamRepo !== "arsenal-fc") {
            continue;
        }
        console.log(teamRepo);
        if (!fs.existsSync(`${distDirectory}/${teamRepo}`)) {
            fs.mkdirSync(`${distDirectory}/${teamRepo}`);
        }

        await extractAllPlayersDataInTeam(players, teamRepo);
    }
}

async function extractAllPlayersDataInTeam(players, teamRepo) {
    for (const player of players) {
        // console.log(player);
        const filePath = `${playersHTMLFolder}/${teamRepo}/${player}`;
        const distPath = `${distDirectory}/${teamRepo}/${player.split(".")[0]}.json`;

        // console.log(distPath);
        await extractPlayerData(filePath, distPath);
    }
}

extractAllPlayersData();

// const aTeam = fs.readFileSync(path.join(__dirname, "../data/teams/afc-bournemouth.json")).toString("utf-8");
// const players: IPlayerData[] = JSON.parse(aTeam).players;

// const distDirectory = path.join(__dirname, "../data/players/afc-bournemouth");

// if (!fs.existsSync(distDirectory)) {
//     fs.mkdirSync(distDirectory);
// }

// players.forEach((item, index) => {
//     const filePath = path.join(__dirname, `../html/teams/afc-bournemouth/${item.slugName}.html`);
//     const distPath = `${distDirectory}/${item.slugName}.json`;
//     extractPlayerData(filePath, distPath);
// });
