import fs from "fs";
import path from "path";
// import { IPlayerMatchData } from "./extractPlayerData";
import { IPlayerData } from "./extractTeamData";
import { getPageContent } from "./scrapingPlayer";
import slugify from "./slugify";

const teamsFolder = path.join(__dirname, "../data/teams");

const files = fs.readdirSync(teamsFolder);
console.log(files);

// var processItems = function (x) {
//   if (x < urls.length) {
//     http.get(urls[x], function (res) {

//       // add some code here to process the response

//       processItems(x + 1);
//     });
//   }
// };

function processItems(index: number): void {

  if (index < files.length) {
    console.log(files[index]);
    const team = fs.readFileSync(`${teamsFolder}/${files[index]}`).toString("utf-8");
    const teamParse = JSON.parse(team);
    const players: IPlayerData[] = teamParse.players;
    const teamId = teamParse.id;
    players.forEach(async (player) => {
      const slugPlayerName = slugify(`${player.firstName}-${player.lastName}`);
      // console.log(slugPlayerName);
      // https://www.transfermarkt.com/jermain-defoe/leistungsdatendetails/spieler/3875/saison/2018/verein/989/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.com/aaron-ramsdale/leistungsdatendetails/spieler/427568/saison/2017/verein/1219/liga/0/wettbewerb/GB4/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.com/bernd-leno/leistungsdatendetails/spieler/72476/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.com/bernd-leno/leistungsdatendetails/spieler/72476/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.co.uk/pierre-emerick-aubameyang/leistungsdatendetails/spieler/58864/saison/2018/verein/11/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1
      // https://www.transfermarkt.com/artur-boruc/leistungsdaten/spieler/15220/saison/2018/plus/1#GB1

      await getPageContent(`https://www.transfermarkt.com/${slugPlayerName}/leistungsdatendetails/spieler/${player.id}/saison/2018/verein/${teamId}/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1`, slugPlayerName);
    });

    // processItems(index + 1);
  }
}

processItems(0);
