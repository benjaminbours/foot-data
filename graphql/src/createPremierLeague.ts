import { prisma } from "./generated/prisma-client";

async function main() {
    const newCompetition = await prisma
        .createCompetition({
            name: "Premier League",
        });
    console.log(`Created new competition: ${newCompetition.name} (ID: ${newCompetition.id})`);

    const allCompetitions = await prisma.competitions();
    console.log(allCompetitions);
}

main().catch((e) => console.error(e));
