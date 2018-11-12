import fs from "fs";
import path from "path";
// import { IPlayerMatchData } from "./extractPlayerData";
import { IPlayerData } from "./extractTeamData";
import { getPageContent } from "./scrapingPlayer";
import slugify from "./slugify";

const teamsFolder = path.join(__dirname, "../data/teams");

fs.readdir(teamsFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file);

    const players = fs.readFileSync(`${teamsFolder}/${file}`).toString("utf-8");
    const playersList: IPlayerData[] = JSON.parse(players).players;
    // console.log(playersList);
    playersList.forEach(async (player) => {
      // console.log(player);

      const slugPlayerName = slugify(`${player.firstName}-${player.lastName}`);
      console.log(slugPlayerName);

      // console.log(`${player.firstName.toLowerCase()}-${player.lastName ? player.lastName.toLowerCase() : "nothing"}`);
      // https://www.transfermarkt.com/bernd-leno/leistungsdatendetails/spieler/72476/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/leistungsdatendetails/spieler/58864/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1

      await getPageContent(`https://www.transfermarkt.com/${slugPlayerName}/leistungsdatendetails/spieler/${player.id}/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1`, slugPlayerName);
    });

  });
});
