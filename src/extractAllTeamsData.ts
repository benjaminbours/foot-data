import fs from "fs";
import path from "path";
import { IClubData } from "./extractCompetitionData";
import { extractTeamData } from "./extractTeamData";

const premierLeague = fs.readFileSync(path.join(__dirname, "../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClubData[] = JSON.parse(premierLeague).teams;

teams.forEach(async (item) => {
    console.log(item.slugName);
    await extractTeamData(item.slugName);
});
