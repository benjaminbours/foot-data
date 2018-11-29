import { prisma } from "./generated/prisma-client";

async function main() {
    await prisma
        .deleteManyPlayerMatchDatas();
    await prisma
        .deleteManyMatches();
}

main().catch((e) => console.error(e));
