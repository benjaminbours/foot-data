import fs from "fs";
import path from "path";
import { IPlayer } from "../../types";
import { getPageContent } from "./scrapingPlayer";
import slugify from "./slugify";

const teamsFolder = path.join(__dirname, "../data/teams");
const playersHTMLFolder = path.join(__dirname, "../html/players");

const files = fs.readdirSync(teamsFolder);

async function processItems(index: number) {
  if (index < files.length) {
    console.log(files[index]);
    const team = fs.readFileSync(`${teamsFolder}/${files[index]}`).toString("utf-8");
    const teamParse = JSON.parse(team);
    const players: IPlayer[] = teamParse.players;
    const teamId = teamParse.id;
    const folderPath = `${playersHTMLFolder}/${files[index].split(".")[0]}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    for (const player of players) {
      const slugPlayerName = slugify(`${player.firstName}-${player.lastName}`);
      await getPageContent(`https://www.transfermarkt.com/${slugPlayerName}/leistungsdatendetails/spieler/${player.originId}/saison/2018/verein/${teamId}/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1`, slugPlayerName, folderPath);
    }

    processItems(index + 1);
  }
}

processItems(0);
