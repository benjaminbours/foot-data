export interface IClub {
    name: string;
    shortName: string;
    slugName: string;
    originId: number;
    squad: number;
    age: number;
    foreigners: number;
    totalMarketValue: string;
    averageMarketValue: string;
}

export interface IPlayer {
    shirtNumber: number;
    firstName: string;
    lastName: string;
    slugName: string;
    originId: number;
    mainPosition: string;
    dateOfBirth: string;
    age: number;
    height: string;
    foot: string;
    joined: string;
    contractUntil: string;
    marketValue: string;
}
