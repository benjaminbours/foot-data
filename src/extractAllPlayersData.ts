import fs from "fs";
import path from "path";
import { extractPlayerData } from "./extractPlayerData";
import { IPlayerData } from "./extractTeamData";

const aTeam = fs.readFileSync(path.join(__dirname, "../data/teams/afc-bournemouth.json")).toString("utf-8");
const players: IPlayerData[] = JSON.parse(aTeam).players;

const distDirectory = path.join(__dirname, "../data/teams/afc-bournemouth");

if (!fs.existsSync(distDirectory)) {
    fs.mkdirSync(distDirectory);
}

players.forEach((item) => {
    console.log(item.slugName);
    const filePath = path.join(__dirname, `../html/teams/afc-bournemouth/${item.slugName}.html`);
    const distPath = `${distDirectory}/${item.slugName}.json`;
    extractPlayerData(filePath, distPath);
});
