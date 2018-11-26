import fs from "fs";
import path from "path";
import { IClub } from "../../types";
import { getTeamContent } from "./scrapingTeam";

const premierLeague = fs.readFileSync(path.join(__dirname, "../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClub[] = JSON.parse(premierLeague).teams;

teams.forEach(async (item) => {
    await getTeamContent(`https://www.transfermarkt.com/${item.slugName}/kader/verein/${item.originId}/saison_id/2018/plus/1`, item.slugName);
});
