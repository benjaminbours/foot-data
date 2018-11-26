import fs from "fs";
import path from "path";
import { IClub } from "../../types";
import { prisma } from "./generated/prisma-client";

const premierLeague = fs.readFileSync(path.join(__dirname, "../../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClub[] = JSON.parse(premierLeague);

async function main(team: IClub) {
    console.log(team);
    const newTeam = await prisma.createTeam({
        ...team,
        league: {
            connect: {
                name: "Premier League",
            },
        },
    });
    console.log(`Created new team: ${newTeam.name} (ID: ${newTeam.id})`);
}

for (const team of teams) {
    main(team).catch((e) => console.error(e));
}
