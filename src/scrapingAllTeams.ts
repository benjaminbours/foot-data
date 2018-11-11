import fs from "fs";
import path from "path";
import { IClubData } from "./extractCompetitionData";
import { getTeamContent } from "./scrapingTeam";

const premierLeague = fs.readFileSync(path.join(__dirname, "../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClubData[] = JSON.parse(premierLeague).teams;

teams.forEach(async (item) => {
    await getTeamContent(`https://www.transfermarkt.com/${item.slugName}/kader/verein/${item.id}/saison_id/2018/plus/1`, item.slugName);
});
