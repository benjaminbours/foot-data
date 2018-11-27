import fs from "fs";
import path from "path";
// import { IClub } from "../../types";
import { prisma } from "./generated/prisma-client";

async function main() {
    const deletedUser = await prisma
        .deleteManyPlayers();
}

main().catch((e) => console.error(e));
