import fs from "fs";
import { request } from "graphql-request";
import path from "path";
import { getPageContent } from "./scrapingPlayer";
import slugify from "./slugify";

const playersHTMLFolder = path.join(__dirname, "../../html/players");

const query = `
query {
  competitions {
    id
		name
    teams {
      slugName
      originId
      players {
        firstName
        lastName
        slugName
        originId
      }
    }
  }
}
`;

request("http://localhost:4466", query)
  .then(async (data: any) => {
    const teams = data.competitions[0].teams;

    for (const team of teams) {
      const teamId = team.originId;
      const teamSlug = team.slugName;
      const players = team.players;
      const folderPath = `${playersHTMLFolder}/${teamSlug}`;
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      console.log(teamSlug);

      for (const player of players) {
        const slugPlayerName = slugify(player.lastName === "none" ? player.firstName : player.slugName);
        console.log(slugPlayerName);
        await getPageContent(`https://www.transfermarkt.com/${slugPlayerName}/leistungsdatendetails/spieler/${player.originId}/saison/2018/verein/${teamId}/liga/0/wettbewerb/GB1/pos/0/trainer_id/0/plus/1`, slugPlayerName, folderPath);
      }
    }
    console.log(data.competitions[0].teams);
  });
