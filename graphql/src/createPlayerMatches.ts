import fs from "fs";
import { request } from "graphql-request";
import path from "path";
import { IClub, IDayMatchData, IPlayerMatchData, PlayerStatus } from "../../types";
import { prisma } from "./generated/prisma-client";

const query = `
query {
  competitions {
    id
        name
    teams {
      slugName
      originId
      shortName
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
        const teamsDB = data.competitions[0].teams;

        const mainPlayersFolder = path.join(__dirname, "../../data/players");
        const teams = fs.readdirSync(mainPlayersFolder);

        for (const team of teams) {
            const teamOriginId = findOriginId(team, teamsDB);
            const teamDB = teamsDB.filter((item) => item.originId === teamOriginId)[0];
            const playersDB = teamDB.players;

            const playersFiles = fs.readdirSync(`${mainPlayersFolder}/${team}`);
            // console.log(teamDB);

            for (const file of playersFiles) {
                let slugName = file.split(".")[0];
                if (!slugName.includes("-")) {
                    slugName = `${slugName}-none`;
                }
                const playerOriginId = findPlayerOriginId(slugName, playersDB);
                // console.log(playerOriginId);
                // if (playerOriginId === 0) {
                //     console.log(slugName);
                // }
                const playerMatches = fs.readFileSync(`${mainPlayersFolder}/${team}/${file}`).toString("utf-8");
                const matches: IDayMatchData[] = JSON.parse(playerMatches).matchesData;
                main(matches, playerOriginId, teamsDB).catch((e) => console.error(e));
            }
        }
    });

async function main(matches: IDayMatchData[], playerOriginId, teamsDB) {
    // console.log(teamsDB);
    // I should fine the shortName of the away and the home team to match schema relation

    // console.log(playerOriginId);

    for (const match of matches) {
        //     // match.awayTeam = {}
        const slugsTeamInMatch = findTeamsSlugName(match.homeTeam, match.awayTeam, teamsDB);
        // console.log(slugsTeamInMatch);
        let newMatch;
        if (match.stats) {
            newMatch = await prisma.createMatch({
                day: match.day,
                homeTeam: {
                    connect: {
                        slugName: slugsTeamInMatch.home,
                    },
                },
                homeTeamRanking: match.homeTeamRanking,
                awayTeam: {
                    connect: {
                        slugName: slugsTeamInMatch.away,
                    },
                },
                awayTeamRanking: match.awayTeamRanking,
                result: match.result,
                playerStatus: match.playerStatus,
                stats: {
                    create: {
                        ...match.stats,
                        player: {
                            connect: {
                                originId: playerOriginId,
                            },
                        },
                    },
                },
                player: {
                    connect: {
                        originId: playerOriginId,
                    },
                },
            });
        } else {
            newMatch = await prisma.createMatch({
                day: match.day,
                homeTeam: {
                    connect: {
                        slugName: slugsTeamInMatch.home,
                    },
                },
                homeTeamRanking: match.homeTeamRanking,
                awayTeam: {
                    connect: {
                        slugName: slugsTeamInMatch.away,
                    },
                },
                awayTeamRanking: match.awayTeamRanking,
                result: match.result,
                playerStatus: match.playerStatus,
                player: {
                    connect: {
                        originId: playerOriginId,
                    },
                },
            });

        }
        console.log(`Created new match: ${newMatch.day} (ID: ${newMatch.id})`);
    }
}

function findTeamsSlugName(homeTeam, awayTeam, allTeams) {
    const slugs = {
        home: "none",
        away: "none",
    };
    for (const team of allTeams) {
        if (team.shortName === homeTeam) {
            slugs.home = team.slugName;
        }
        if (team.shortName === awayTeam) {
            slugs.away = team.slugName;
        }
    }
    return slugs;
}

function findOriginId(teamSlug: string, teamsDB: IClub[]) {
    let originId = 0;
    for (const item of teamsDB) {
        if (item.slugName === teamSlug) {
            originId = item.originId;
        }
    }
    return originId;
}

function findPlayerOriginId(playerSlug: string, playersDB) {
    let originId = 0;
    for (const item of playersDB) {
        if (item.slugName === playerSlug) {
            originId = item.originId;
        }
    }
    return originId;
}
