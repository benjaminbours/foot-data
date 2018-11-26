import fs from "fs";
import path from "path";
import { IClub, IPlayer } from "../../types";
import { prisma } from "./generated/prisma-client";

const teamsFolder = path.join(__dirname, "../../data/teams");
const files = fs.readdirSync(teamsFolder);

for (const file of files) {
    const team = fs.readFileSync(`${teamsFolder}/${file}`).toString("utf-8");
    const players: IPlayer[] = JSON.parse(team);
    for (const player of players) {
        main(player, file.split(".")[0]).catch((e) => console.error(e));
    }
    // console.log(team);
}

async function main(player: IPlayer, slugTeam: string) {
    // console.log(player);
    const newPlayer = await prisma.createPlayer({
        ...player,
        team: {
            connect: {
                slugName: slugTeam,
            },
        },
    });
    console.log(`Created new player: ${newPlayer.slugName} (ID: ${newPlayer.id})`);
}

// console.log(files);
// for (const team of teams) {
//     main(player).catch((e) => console.error(e));
// }
