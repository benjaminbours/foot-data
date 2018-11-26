import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import Club from "../database/Club";
import { IClubData } from "../scraping/extractCompetitionData";

const premierLeague = fs.readFileSync(path.join(__dirname, "../../data/competitions/premierLeague.json")).toString("utf-8");
const teams: IClubData[] = JSON.parse(premierLeague).teams;

// console.log(teams[0]);
// const firstTeam = new Club(teams[0]);

// Club.create(...teams, (err: Error, club: IClubData) => {
//     if (err) {
//         return console.log("There was a problem registering the club.");
//     }
//     console.log(club);
// });

// Club.find( async (err: Error, clubs: any) => {
//     if (err) {
//         return console.log("There was a problem getting the clubs.");
//     }
//     await console.log(clubs);
// });

console.log("hola");
