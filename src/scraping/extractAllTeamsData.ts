import fs from "fs";
import path from "path";
import { IClub } from "../../types";
import { extractTeamData } from "./extractTeamData";

const premierLeague = fs.readFileSync(path.join(__dirname, "../../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClub[] = JSON.parse(premierLeague);

teams.forEach(async (item) => {
    console.log(item.slugName);
    await extractTeamData(item.slugName, item.originId);
});
