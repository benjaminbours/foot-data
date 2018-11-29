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

export interface IPlayerMatchData {
    position: string;
    goals: number;
    assists: number;
    ownGoals: number;
    yellowCards: boolean;
    secondYellows: boolean;
    redCards: boolean;
    substitutedOn: number;
    substitutedOff: number;
    minutesPlayed: number;
}

export interface IDayMatchData {
    day: number;
    date: string;
    homeTeam: string;
    homeTeamRanking: number;
    awayTeam: string;
    awayTeamRanking: number;
    result: string;
    playerStatus: PlayerStatus;
    stats: IPlayerMatchData | null;
}

export enum PlayerStatus {
    ON_THE_BENCH = "ON_THE_BENCH",
    NOT_IN_SQUAD = "NOT_IN_SQUAD",
    SECOND_TEAM = "SECOND_TEAM",
    WITH_U21 = "WITH_U21",
    RED_CARD_SUSPENSION = "RED_CARD_SUSPENSION",
    NO_INFORMATION = "NO_INFORMATION",
    INJURED = "INJURED",
    PLAYED = "PLAYED",
    INTERNATIONAL = "INTERNATIONAL",
    INDIRECT_SUSPENSION = "INDIRECT_SUSPENSION",
    YELLOW_CARD_SUSPENSION = "YELLOW_CARD_SUSPENSION",
    NO_ELIGIBLE = "NO_ELIGIBLE",
}
