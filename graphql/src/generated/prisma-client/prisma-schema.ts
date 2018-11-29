export const typeDefs = /* GraphQL */ `type AggregateCompetition {
  count: Int!
}

type AggregateMatch {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type AggregatePlayerMatchData {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Competition {
  id: ID!
  name: String!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match!]
}

type CompetitionConnection {
  pageInfo: PageInfo!
  edges: [CompetitionEdge]!
  aggregate: AggregateCompetition!
}

input CompetitionCreateInput {
  name: String!
  teams: TeamCreateManyWithoutLeagueInput
  matches: MatchCreateManyInput
}

input CompetitionCreateOneWithoutTeamsInput {
  create: CompetitionCreateWithoutTeamsInput
  connect: CompetitionWhereUniqueInput
}

input CompetitionCreateWithoutTeamsInput {
  name: String!
  matches: MatchCreateManyInput
}

type CompetitionEdge {
  node: Competition!
  cursor: String!
}

enum CompetitionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompetitionPreviousValues {
  id: ID!
  name: String!
}

type CompetitionSubscriptionPayload {
  mutation: MutationType!
  node: Competition
  updatedFields: [String!]
  previousValues: CompetitionPreviousValues
}

input CompetitionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompetitionWhereInput
  AND: [CompetitionSubscriptionWhereInput!]
  OR: [CompetitionSubscriptionWhereInput!]
  NOT: [CompetitionSubscriptionWhereInput!]
}

input CompetitionUpdateInput {
  name: String
  teams: TeamUpdateManyWithoutLeagueInput
  matches: MatchUpdateManyInput
}

input CompetitionUpdateManyMutationInput {
  name: String
}

input CompetitionUpdateOneRequiredWithoutTeamsInput {
  create: CompetitionCreateWithoutTeamsInput
  update: CompetitionUpdateWithoutTeamsDataInput
  upsert: CompetitionUpsertWithoutTeamsInput
  connect: CompetitionWhereUniqueInput
}

input CompetitionUpdateWithoutTeamsDataInput {
  name: String
  matches: MatchUpdateManyInput
}

input CompetitionUpsertWithoutTeamsInput {
  update: CompetitionUpdateWithoutTeamsDataInput!
  create: CompetitionCreateWithoutTeamsInput!
}

input CompetitionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  matches_every: MatchWhereInput
  matches_some: MatchWhereInput
  matches_none: MatchWhereInput
  AND: [CompetitionWhereInput!]
  OR: [CompetitionWhereInput!]
  NOT: [CompetitionWhereInput!]
}

input CompetitionWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Match {
  id: ID!
  day: Int!
  homeTeam: Team!
  homeTeamRanking: Int!
  awayTeam: Team!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  stats: PlayerMatchData
  player: Player!
}

type MatchConnection {
  pageInfo: PageInfo!
  edges: [MatchEdge]!
  aggregate: AggregateMatch!
}

input MatchCreateInput {
  day: Int!
  homeTeam: TeamCreateOneWithoutHomeMatchesInput!
  homeTeamRanking: Int!
  awayTeam: TeamCreateOneWithoutAwayMatchesInput!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  stats: PlayerMatchDataCreateOneWithoutMatchInput
  player: PlayerCreateOneWithoutMatchesInput!
}

input MatchCreateManyInput {
  create: [MatchCreateInput!]
  connect: [MatchWhereUniqueInput!]
}

input MatchCreateManyWithoutAwayTeamInput {
  create: [MatchCreateWithoutAwayTeamInput!]
  connect: [MatchWhereUniqueInput!]
}

input MatchCreateManyWithoutHomeTeamInput {
  create: [MatchCreateWithoutHomeTeamInput!]
  connect: [MatchWhereUniqueInput!]
}

input MatchCreateManyWithoutPlayerInput {
  create: [MatchCreateWithoutPlayerInput!]
  connect: [MatchWhereUniqueInput!]
}

input MatchCreateOneWithoutStatsInput {
  create: MatchCreateWithoutStatsInput
  connect: MatchWhereUniqueInput
}

input MatchCreateWithoutAwayTeamInput {
  day: Int!
  homeTeam: TeamCreateOneWithoutHomeMatchesInput!
  homeTeamRanking: Int!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  stats: PlayerMatchDataCreateOneWithoutMatchInput
  player: PlayerCreateOneWithoutMatchesInput!
}

input MatchCreateWithoutHomeTeamInput {
  day: Int!
  homeTeamRanking: Int!
  awayTeam: TeamCreateOneWithoutAwayMatchesInput!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  stats: PlayerMatchDataCreateOneWithoutMatchInput
  player: PlayerCreateOneWithoutMatchesInput!
}

input MatchCreateWithoutPlayerInput {
  day: Int!
  homeTeam: TeamCreateOneWithoutHomeMatchesInput!
  homeTeamRanking: Int!
  awayTeam: TeamCreateOneWithoutAwayMatchesInput!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  stats: PlayerMatchDataCreateOneWithoutMatchInput
}

input MatchCreateWithoutStatsInput {
  day: Int!
  homeTeam: TeamCreateOneWithoutHomeMatchesInput!
  homeTeamRanking: Int!
  awayTeam: TeamCreateOneWithoutAwayMatchesInput!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
  player: PlayerCreateOneWithoutMatchesInput!
}

type MatchEdge {
  node: Match!
  cursor: String!
}

enum MatchOrderByInput {
  id_ASC
  id_DESC
  day_ASC
  day_DESC
  homeTeamRanking_ASC
  homeTeamRanking_DESC
  awayTeamRanking_ASC
  awayTeamRanking_DESC
  result_ASC
  result_DESC
  playerStatus_ASC
  playerStatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MatchPreviousValues {
  id: ID!
  day: Int!
  homeTeamRanking: Int!
  awayTeamRanking: Int!
  result: String!
  playerStatus: PlayerMatchStatus!
}

type MatchSubscriptionPayload {
  mutation: MutationType!
  node: Match
  updatedFields: [String!]
  previousValues: MatchPreviousValues
}

input MatchSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MatchWhereInput
  AND: [MatchSubscriptionWhereInput!]
  OR: [MatchSubscriptionWhereInput!]
  NOT: [MatchSubscriptionWhereInput!]
}

input MatchUpdateDataInput {
  day: Int
  homeTeam: TeamUpdateOneRequiredWithoutHomeMatchesInput
  homeTeamRanking: Int
  awayTeam: TeamUpdateOneRequiredWithoutAwayMatchesInput
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  stats: PlayerMatchDataUpdateOneWithoutMatchInput
  player: PlayerUpdateOneRequiredWithoutMatchesInput
}

input MatchUpdateInput {
  day: Int
  homeTeam: TeamUpdateOneRequiredWithoutHomeMatchesInput
  homeTeamRanking: Int
  awayTeam: TeamUpdateOneRequiredWithoutAwayMatchesInput
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  stats: PlayerMatchDataUpdateOneWithoutMatchInput
  player: PlayerUpdateOneRequiredWithoutMatchesInput
}

input MatchUpdateManyInput {
  create: [MatchCreateInput!]
  update: [MatchUpdateWithWhereUniqueNestedInput!]
  upsert: [MatchUpsertWithWhereUniqueNestedInput!]
  delete: [MatchWhereUniqueInput!]
  connect: [MatchWhereUniqueInput!]
  disconnect: [MatchWhereUniqueInput!]
}

input MatchUpdateManyMutationInput {
  day: Int
  homeTeamRanking: Int
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
}

input MatchUpdateManyWithoutAwayTeamInput {
  create: [MatchCreateWithoutAwayTeamInput!]
  delete: [MatchWhereUniqueInput!]
  connect: [MatchWhereUniqueInput!]
  disconnect: [MatchWhereUniqueInput!]
  update: [MatchUpdateWithWhereUniqueWithoutAwayTeamInput!]
  upsert: [MatchUpsertWithWhereUniqueWithoutAwayTeamInput!]
}

input MatchUpdateManyWithoutHomeTeamInput {
  create: [MatchCreateWithoutHomeTeamInput!]
  delete: [MatchWhereUniqueInput!]
  connect: [MatchWhereUniqueInput!]
  disconnect: [MatchWhereUniqueInput!]
  update: [MatchUpdateWithWhereUniqueWithoutHomeTeamInput!]
  upsert: [MatchUpsertWithWhereUniqueWithoutHomeTeamInput!]
}

input MatchUpdateManyWithoutPlayerInput {
  create: [MatchCreateWithoutPlayerInput!]
  delete: [MatchWhereUniqueInput!]
  connect: [MatchWhereUniqueInput!]
  disconnect: [MatchWhereUniqueInput!]
  update: [MatchUpdateWithWhereUniqueWithoutPlayerInput!]
  upsert: [MatchUpsertWithWhereUniqueWithoutPlayerInput!]
}

input MatchUpdateOneRequiredWithoutStatsInput {
  create: MatchCreateWithoutStatsInput
  update: MatchUpdateWithoutStatsDataInput
  upsert: MatchUpsertWithoutStatsInput
  connect: MatchWhereUniqueInput
}

input MatchUpdateWithoutAwayTeamDataInput {
  day: Int
  homeTeam: TeamUpdateOneRequiredWithoutHomeMatchesInput
  homeTeamRanking: Int
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  stats: PlayerMatchDataUpdateOneWithoutMatchInput
  player: PlayerUpdateOneRequiredWithoutMatchesInput
}

input MatchUpdateWithoutHomeTeamDataInput {
  day: Int
  homeTeamRanking: Int
  awayTeam: TeamUpdateOneRequiredWithoutAwayMatchesInput
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  stats: PlayerMatchDataUpdateOneWithoutMatchInput
  player: PlayerUpdateOneRequiredWithoutMatchesInput
}

input MatchUpdateWithoutPlayerDataInput {
  day: Int
  homeTeam: TeamUpdateOneRequiredWithoutHomeMatchesInput
  homeTeamRanking: Int
  awayTeam: TeamUpdateOneRequiredWithoutAwayMatchesInput
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  stats: PlayerMatchDataUpdateOneWithoutMatchInput
}

input MatchUpdateWithoutStatsDataInput {
  day: Int
  homeTeam: TeamUpdateOneRequiredWithoutHomeMatchesInput
  homeTeamRanking: Int
  awayTeam: TeamUpdateOneRequiredWithoutAwayMatchesInput
  awayTeamRanking: Int
  result: String
  playerStatus: PlayerMatchStatus
  player: PlayerUpdateOneRequiredWithoutMatchesInput
}

input MatchUpdateWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput!
  data: MatchUpdateDataInput!
}

input MatchUpdateWithWhereUniqueWithoutAwayTeamInput {
  where: MatchWhereUniqueInput!
  data: MatchUpdateWithoutAwayTeamDataInput!
}

input MatchUpdateWithWhereUniqueWithoutHomeTeamInput {
  where: MatchWhereUniqueInput!
  data: MatchUpdateWithoutHomeTeamDataInput!
}

input MatchUpdateWithWhereUniqueWithoutPlayerInput {
  where: MatchWhereUniqueInput!
  data: MatchUpdateWithoutPlayerDataInput!
}

input MatchUpsertWithoutStatsInput {
  update: MatchUpdateWithoutStatsDataInput!
  create: MatchCreateWithoutStatsInput!
}

input MatchUpsertWithWhereUniqueNestedInput {
  where: MatchWhereUniqueInput!
  update: MatchUpdateDataInput!
  create: MatchCreateInput!
}

input MatchUpsertWithWhereUniqueWithoutAwayTeamInput {
  where: MatchWhereUniqueInput!
  update: MatchUpdateWithoutAwayTeamDataInput!
  create: MatchCreateWithoutAwayTeamInput!
}

input MatchUpsertWithWhereUniqueWithoutHomeTeamInput {
  where: MatchWhereUniqueInput!
  update: MatchUpdateWithoutHomeTeamDataInput!
  create: MatchCreateWithoutHomeTeamInput!
}

input MatchUpsertWithWhereUniqueWithoutPlayerInput {
  where: MatchWhereUniqueInput!
  update: MatchUpdateWithoutPlayerDataInput!
  create: MatchCreateWithoutPlayerInput!
}

input MatchWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  day: Int
  day_not: Int
  day_in: [Int!]
  day_not_in: [Int!]
  day_lt: Int
  day_lte: Int
  day_gt: Int
  day_gte: Int
  homeTeam: TeamWhereInput
  homeTeamRanking: Int
  homeTeamRanking_not: Int
  homeTeamRanking_in: [Int!]
  homeTeamRanking_not_in: [Int!]
  homeTeamRanking_lt: Int
  homeTeamRanking_lte: Int
  homeTeamRanking_gt: Int
  homeTeamRanking_gte: Int
  awayTeam: TeamWhereInput
  awayTeamRanking: Int
  awayTeamRanking_not: Int
  awayTeamRanking_in: [Int!]
  awayTeamRanking_not_in: [Int!]
  awayTeamRanking_lt: Int
  awayTeamRanking_lte: Int
  awayTeamRanking_gt: Int
  awayTeamRanking_gte: Int
  result: String
  result_not: String
  result_in: [String!]
  result_not_in: [String!]
  result_lt: String
  result_lte: String
  result_gt: String
  result_gte: String
  result_contains: String
  result_not_contains: String
  result_starts_with: String
  result_not_starts_with: String
  result_ends_with: String
  result_not_ends_with: String
  playerStatus: PlayerMatchStatus
  playerStatus_not: PlayerMatchStatus
  playerStatus_in: [PlayerMatchStatus!]
  playerStatus_not_in: [PlayerMatchStatus!]
  stats: PlayerMatchDataWhereInput
  player: PlayerWhereInput
  AND: [MatchWhereInput!]
  OR: [MatchWhereInput!]
  NOT: [MatchWhereInput!]
}

input MatchWhereUniqueInput {
  id: ID
}

type Mutation {
  createCompetition(data: CompetitionCreateInput!): Competition!
  updateCompetition(data: CompetitionUpdateInput!, where: CompetitionWhereUniqueInput!): Competition
  updateManyCompetitions(data: CompetitionUpdateManyMutationInput!, where: CompetitionWhereInput): BatchPayload!
  upsertCompetition(where: CompetitionWhereUniqueInput!, create: CompetitionCreateInput!, update: CompetitionUpdateInput!): Competition!
  deleteCompetition(where: CompetitionWhereUniqueInput!): Competition
  deleteManyCompetitions(where: CompetitionWhereInput): BatchPayload!
  createMatch(data: MatchCreateInput!): Match!
  updateMatch(data: MatchUpdateInput!, where: MatchWhereUniqueInput!): Match
  updateManyMatches(data: MatchUpdateManyMutationInput!, where: MatchWhereInput): BatchPayload!
  upsertMatch(where: MatchWhereUniqueInput!, create: MatchCreateInput!, update: MatchUpdateInput!): Match!
  deleteMatch(where: MatchWhereUniqueInput!): Match
  deleteManyMatches(where: MatchWhereInput): BatchPayload!
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
  createPlayerMatchData(data: PlayerMatchDataCreateInput!): PlayerMatchData!
  updatePlayerMatchData(data: PlayerMatchDataUpdateInput!, where: PlayerMatchDataWhereUniqueInput!): PlayerMatchData
  updateManyPlayerMatchDatas(data: PlayerMatchDataUpdateManyMutationInput!, where: PlayerMatchDataWhereInput): BatchPayload!
  upsertPlayerMatchData(where: PlayerMatchDataWhereUniqueInput!, create: PlayerMatchDataCreateInput!, update: PlayerMatchDataUpdateInput!): PlayerMatchData!
  deletePlayerMatchData(where: PlayerMatchDataWhereUniqueInput!): PlayerMatchData
  deleteManyPlayerMatchDatas(where: PlayerMatchDataWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Player {
  id: ID!
  shirtNumber: Int!
  firstName: String!
  lastName: String!
  slugName: String!
  originId: Int!
  mainPosition: String!
  dateOfBirth: String!
  age: Int!
  height: String!
  foot: String!
  joined: String!
  contractUntil: String!
  marketValue: String!
  team: Team!
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match!]
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  shirtNumber: Int!
  firstName: String!
  lastName: String!
  slugName: String!
  originId: Int!
  mainPosition: String!
  dateOfBirth: String!
  age: Int!
  height: String!
  foot: String!
  joined: String!
  contractUntil: String!
  marketValue: String!
  team: TeamCreateOneWithoutPlayersInput!
  matches: MatchCreateManyWithoutPlayerInput
}

input PlayerCreateManyWithoutTeamInput {
  create: [PlayerCreateWithoutTeamInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateOneInput {
  create: PlayerCreateInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateOneWithoutMatchesInput {
  create: PlayerCreateWithoutMatchesInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateWithoutMatchesInput {
  shirtNumber: Int!
  firstName: String!
  lastName: String!
  slugName: String!
  originId: Int!
  mainPosition: String!
  dateOfBirth: String!
  age: Int!
  height: String!
  foot: String!
  joined: String!
  contractUntil: String!
  marketValue: String!
  team: TeamCreateOneWithoutPlayersInput!
}

input PlayerCreateWithoutTeamInput {
  shirtNumber: Int!
  firstName: String!
  lastName: String!
  slugName: String!
  originId: Int!
  mainPosition: String!
  dateOfBirth: String!
  age: Int!
  height: String!
  foot: String!
  joined: String!
  contractUntil: String!
  marketValue: String!
  matches: MatchCreateManyWithoutPlayerInput
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

type PlayerMatchData {
  id: ID!
  position: String!
  goals: Int!
  assists: Int!
  ownGoals: Int!
  yellowCards: Boolean!
  secondYellows: Boolean!
  redCards: Boolean!
  substitutedOn: Int!
  substitutedOff: Int!
  minutesPlayed: Int!
  match: Match!
  player: Player!
}

type PlayerMatchDataConnection {
  pageInfo: PageInfo!
  edges: [PlayerMatchDataEdge]!
  aggregate: AggregatePlayerMatchData!
}

input PlayerMatchDataCreateInput {
  position: String!
  goals: Int!
  assists: Int!
  ownGoals: Int!
  yellowCards: Boolean!
  secondYellows: Boolean!
  redCards: Boolean!
  substitutedOn: Int!
  substitutedOff: Int!
  minutesPlayed: Int!
  match: MatchCreateOneWithoutStatsInput!
  player: PlayerCreateOneInput!
}

input PlayerMatchDataCreateOneWithoutMatchInput {
  create: PlayerMatchDataCreateWithoutMatchInput
  connect: PlayerMatchDataWhereUniqueInput
}

input PlayerMatchDataCreateWithoutMatchInput {
  position: String!
  goals: Int!
  assists: Int!
  ownGoals: Int!
  yellowCards: Boolean!
  secondYellows: Boolean!
  redCards: Boolean!
  substitutedOn: Int!
  substitutedOff: Int!
  minutesPlayed: Int!
  player: PlayerCreateOneInput!
}

type PlayerMatchDataEdge {
  node: PlayerMatchData!
  cursor: String!
}

enum PlayerMatchDataOrderByInput {
  id_ASC
  id_DESC
  position_ASC
  position_DESC
  goals_ASC
  goals_DESC
  assists_ASC
  assists_DESC
  ownGoals_ASC
  ownGoals_DESC
  yellowCards_ASC
  yellowCards_DESC
  secondYellows_ASC
  secondYellows_DESC
  redCards_ASC
  redCards_DESC
  substitutedOn_ASC
  substitutedOn_DESC
  substitutedOff_ASC
  substitutedOff_DESC
  minutesPlayed_ASC
  minutesPlayed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerMatchDataPreviousValues {
  id: ID!
  position: String!
  goals: Int!
  assists: Int!
  ownGoals: Int!
  yellowCards: Boolean!
  secondYellows: Boolean!
  redCards: Boolean!
  substitutedOn: Int!
  substitutedOff: Int!
  minutesPlayed: Int!
}

type PlayerMatchDataSubscriptionPayload {
  mutation: MutationType!
  node: PlayerMatchData
  updatedFields: [String!]
  previousValues: PlayerMatchDataPreviousValues
}

input PlayerMatchDataSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerMatchDataWhereInput
  AND: [PlayerMatchDataSubscriptionWhereInput!]
  OR: [PlayerMatchDataSubscriptionWhereInput!]
  NOT: [PlayerMatchDataSubscriptionWhereInput!]
}

input PlayerMatchDataUpdateInput {
  position: String
  goals: Int
  assists: Int
  ownGoals: Int
  yellowCards: Boolean
  secondYellows: Boolean
  redCards: Boolean
  substitutedOn: Int
  substitutedOff: Int
  minutesPlayed: Int
  match: MatchUpdateOneRequiredWithoutStatsInput
  player: PlayerUpdateOneRequiredInput
}

input PlayerMatchDataUpdateManyMutationInput {
  position: String
  goals: Int
  assists: Int
  ownGoals: Int
  yellowCards: Boolean
  secondYellows: Boolean
  redCards: Boolean
  substitutedOn: Int
  substitutedOff: Int
  minutesPlayed: Int
}

input PlayerMatchDataUpdateOneWithoutMatchInput {
  create: PlayerMatchDataCreateWithoutMatchInput
  update: PlayerMatchDataUpdateWithoutMatchDataInput
  upsert: PlayerMatchDataUpsertWithoutMatchInput
  delete: Boolean
  disconnect: Boolean
  connect: PlayerMatchDataWhereUniqueInput
}

input PlayerMatchDataUpdateWithoutMatchDataInput {
  position: String
  goals: Int
  assists: Int
  ownGoals: Int
  yellowCards: Boolean
  secondYellows: Boolean
  redCards: Boolean
  substitutedOn: Int
  substitutedOff: Int
  minutesPlayed: Int
  player: PlayerUpdateOneRequiredInput
}

input PlayerMatchDataUpsertWithoutMatchInput {
  update: PlayerMatchDataUpdateWithoutMatchDataInput!
  create: PlayerMatchDataCreateWithoutMatchInput!
}

input PlayerMatchDataWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  goals: Int
  goals_not: Int
  goals_in: [Int!]
  goals_not_in: [Int!]
  goals_lt: Int
  goals_lte: Int
  goals_gt: Int
  goals_gte: Int
  assists: Int
  assists_not: Int
  assists_in: [Int!]
  assists_not_in: [Int!]
  assists_lt: Int
  assists_lte: Int
  assists_gt: Int
  assists_gte: Int
  ownGoals: Int
  ownGoals_not: Int
  ownGoals_in: [Int!]
  ownGoals_not_in: [Int!]
  ownGoals_lt: Int
  ownGoals_lte: Int
  ownGoals_gt: Int
  ownGoals_gte: Int
  yellowCards: Boolean
  yellowCards_not: Boolean
  secondYellows: Boolean
  secondYellows_not: Boolean
  redCards: Boolean
  redCards_not: Boolean
  substitutedOn: Int
  substitutedOn_not: Int
  substitutedOn_in: [Int!]
  substitutedOn_not_in: [Int!]
  substitutedOn_lt: Int
  substitutedOn_lte: Int
  substitutedOn_gt: Int
  substitutedOn_gte: Int
  substitutedOff: Int
  substitutedOff_not: Int
  substitutedOff_in: [Int!]
  substitutedOff_not_in: [Int!]
  substitutedOff_lt: Int
  substitutedOff_lte: Int
  substitutedOff_gt: Int
  substitutedOff_gte: Int
  minutesPlayed: Int
  minutesPlayed_not: Int
  minutesPlayed_in: [Int!]
  minutesPlayed_not_in: [Int!]
  minutesPlayed_lt: Int
  minutesPlayed_lte: Int
  minutesPlayed_gt: Int
  minutesPlayed_gte: Int
  match: MatchWhereInput
  player: PlayerWhereInput
  AND: [PlayerMatchDataWhereInput!]
  OR: [PlayerMatchDataWhereInput!]
  NOT: [PlayerMatchDataWhereInput!]
}

input PlayerMatchDataWhereUniqueInput {
  id: ID
}

enum PlayerMatchStatus {
  ON_THE_BENCH
  NOT_IN_SQUAD
  SECOND_TEAM
  WITH_U21
  RED_CARD_SUSPENSION
  NO_INFORMATION
  INJURED
  PLAYED
  INTERNATIONAL
  INDIRECT_SUSPENSION
  YELLOW_CARD_SUSPENSION
  NO_ELIGIBLE
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  shirtNumber_ASC
  shirtNumber_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  slugName_ASC
  slugName_DESC
  originId_ASC
  originId_DESC
  mainPosition_ASC
  mainPosition_DESC
  dateOfBirth_ASC
  dateOfBirth_DESC
  age_ASC
  age_DESC
  height_ASC
  height_DESC
  foot_ASC
  foot_DESC
  joined_ASC
  joined_DESC
  contractUntil_ASC
  contractUntil_DESC
  marketValue_ASC
  marketValue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerPreviousValues {
  id: ID!
  shirtNumber: Int!
  firstName: String!
  lastName: String!
  slugName: String!
  originId: Int!
  mainPosition: String!
  dateOfBirth: String!
  age: Int!
  height: String!
  foot: String!
  joined: String!
  contractUntil: String!
  marketValue: String!
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateDataInput {
  shirtNumber: Int
  firstName: String
  lastName: String
  slugName: String
  originId: Int
  mainPosition: String
  dateOfBirth: String
  age: Int
  height: String
  foot: String
  joined: String
  contractUntil: String
  marketValue: String
  team: TeamUpdateOneRequiredWithoutPlayersInput
  matches: MatchUpdateManyWithoutPlayerInput
}

input PlayerUpdateInput {
  shirtNumber: Int
  firstName: String
  lastName: String
  slugName: String
  originId: Int
  mainPosition: String
  dateOfBirth: String
  age: Int
  height: String
  foot: String
  joined: String
  contractUntil: String
  marketValue: String
  team: TeamUpdateOneRequiredWithoutPlayersInput
  matches: MatchUpdateManyWithoutPlayerInput
}

input PlayerUpdateManyMutationInput {
  shirtNumber: Int
  firstName: String
  lastName: String
  slugName: String
  originId: Int
  mainPosition: String
  dateOfBirth: String
  age: Int
  height: String
  foot: String
  joined: String
  contractUntil: String
  marketValue: String
}

input PlayerUpdateManyWithoutTeamInput {
  create: [PlayerCreateWithoutTeamInput!]
  delete: [PlayerWhereUniqueInput!]
  connect: [PlayerWhereUniqueInput!]
  disconnect: [PlayerWhereUniqueInput!]
  update: [PlayerUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [PlayerUpsertWithWhereUniqueWithoutTeamInput!]
}

input PlayerUpdateOneRequiredInput {
  create: PlayerCreateInput
  update: PlayerUpdateDataInput
  upsert: PlayerUpsertNestedInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateOneRequiredWithoutMatchesInput {
  create: PlayerCreateWithoutMatchesInput
  update: PlayerUpdateWithoutMatchesDataInput
  upsert: PlayerUpsertWithoutMatchesInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateWithoutMatchesDataInput {
  shirtNumber: Int
  firstName: String
  lastName: String
  slugName: String
  originId: Int
  mainPosition: String
  dateOfBirth: String
  age: Int
  height: String
  foot: String
  joined: String
  contractUntil: String
  marketValue: String
  team: TeamUpdateOneRequiredWithoutPlayersInput
}

input PlayerUpdateWithoutTeamDataInput {
  shirtNumber: Int
  firstName: String
  lastName: String
  slugName: String
  originId: Int
  mainPosition: String
  dateOfBirth: String
  age: Int
  height: String
  foot: String
  joined: String
  contractUntil: String
  marketValue: String
  matches: MatchUpdateManyWithoutPlayerInput
}

input PlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutTeamDataInput!
}

input PlayerUpsertNestedInput {
  update: PlayerUpdateDataInput!
  create: PlayerCreateInput!
}

input PlayerUpsertWithoutMatchesInput {
  update: PlayerUpdateWithoutMatchesDataInput!
  create: PlayerCreateWithoutMatchesInput!
}

input PlayerUpsertWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutTeamDataInput!
  create: PlayerCreateWithoutTeamInput!
}

input PlayerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  shirtNumber: Int
  shirtNumber_not: Int
  shirtNumber_in: [Int!]
  shirtNumber_not_in: [Int!]
  shirtNumber_lt: Int
  shirtNumber_lte: Int
  shirtNumber_gt: Int
  shirtNumber_gte: Int
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  slugName: String
  slugName_not: String
  slugName_in: [String!]
  slugName_not_in: [String!]
  slugName_lt: String
  slugName_lte: String
  slugName_gt: String
  slugName_gte: String
  slugName_contains: String
  slugName_not_contains: String
  slugName_starts_with: String
  slugName_not_starts_with: String
  slugName_ends_with: String
  slugName_not_ends_with: String
  originId: Int
  originId_not: Int
  originId_in: [Int!]
  originId_not_in: [Int!]
  originId_lt: Int
  originId_lte: Int
  originId_gt: Int
  originId_gte: Int
  mainPosition: String
  mainPosition_not: String
  mainPosition_in: [String!]
  mainPosition_not_in: [String!]
  mainPosition_lt: String
  mainPosition_lte: String
  mainPosition_gt: String
  mainPosition_gte: String
  mainPosition_contains: String
  mainPosition_not_contains: String
  mainPosition_starts_with: String
  mainPosition_not_starts_with: String
  mainPosition_ends_with: String
  mainPosition_not_ends_with: String
  dateOfBirth: String
  dateOfBirth_not: String
  dateOfBirth_in: [String!]
  dateOfBirth_not_in: [String!]
  dateOfBirth_lt: String
  dateOfBirth_lte: String
  dateOfBirth_gt: String
  dateOfBirth_gte: String
  dateOfBirth_contains: String
  dateOfBirth_not_contains: String
  dateOfBirth_starts_with: String
  dateOfBirth_not_starts_with: String
  dateOfBirth_ends_with: String
  dateOfBirth_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  height: String
  height_not: String
  height_in: [String!]
  height_not_in: [String!]
  height_lt: String
  height_lte: String
  height_gt: String
  height_gte: String
  height_contains: String
  height_not_contains: String
  height_starts_with: String
  height_not_starts_with: String
  height_ends_with: String
  height_not_ends_with: String
  foot: String
  foot_not: String
  foot_in: [String!]
  foot_not_in: [String!]
  foot_lt: String
  foot_lte: String
  foot_gt: String
  foot_gte: String
  foot_contains: String
  foot_not_contains: String
  foot_starts_with: String
  foot_not_starts_with: String
  foot_ends_with: String
  foot_not_ends_with: String
  joined: String
  joined_not: String
  joined_in: [String!]
  joined_not_in: [String!]
  joined_lt: String
  joined_lte: String
  joined_gt: String
  joined_gte: String
  joined_contains: String
  joined_not_contains: String
  joined_starts_with: String
  joined_not_starts_with: String
  joined_ends_with: String
  joined_not_ends_with: String
  contractUntil: String
  contractUntil_not: String
  contractUntil_in: [String!]
  contractUntil_not_in: [String!]
  contractUntil_lt: String
  contractUntil_lte: String
  contractUntil_gt: String
  contractUntil_gte: String
  contractUntil_contains: String
  contractUntil_not_contains: String
  contractUntil_starts_with: String
  contractUntil_not_starts_with: String
  contractUntil_ends_with: String
  contractUntil_not_ends_with: String
  marketValue: String
  marketValue_not: String
  marketValue_in: [String!]
  marketValue_not_in: [String!]
  marketValue_lt: String
  marketValue_lte: String
  marketValue_gt: String
  marketValue_gte: String
  marketValue_contains: String
  marketValue_not_contains: String
  marketValue_starts_with: String
  marketValue_not_starts_with: String
  marketValue_ends_with: String
  marketValue_not_ends_with: String
  team: TeamWhereInput
  matches_every: MatchWhereInput
  matches_some: MatchWhereInput
  matches_none: MatchWhereInput
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
  originId: Int
}

type Query {
  competition(where: CompetitionWhereUniqueInput!): Competition
  competitions(where: CompetitionWhereInput, orderBy: CompetitionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Competition]!
  competitionsConnection(where: CompetitionWhereInput, orderBy: CompetitionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompetitionConnection!
  match(where: MatchWhereUniqueInput!): Match
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match]!
  matchesConnection(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MatchConnection!
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  playerMatchData(where: PlayerMatchDataWhereUniqueInput!): PlayerMatchData
  playerMatchDatas(where: PlayerMatchDataWhereInput, orderBy: PlayerMatchDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PlayerMatchData]!
  playerMatchDatasConnection(where: PlayerMatchDataWhereInput, orderBy: PlayerMatchDataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerMatchDataConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  competition(where: CompetitionSubscriptionWhereInput): CompetitionSubscriptionPayload
  match(where: MatchSubscriptionWhereInput): MatchSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
  playerMatchData(where: PlayerMatchDataSubscriptionWhereInput): PlayerMatchDataSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  league: Competition!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
  homeMatches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match!]
  awayMatches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  league: CompetitionCreateOneWithoutTeamsInput!
  players: PlayerCreateManyWithoutTeamInput
  homeMatches: MatchCreateManyWithoutHomeTeamInput
  awayMatches: MatchCreateManyWithoutAwayTeamInput
}

input TeamCreateManyWithoutLeagueInput {
  create: [TeamCreateWithoutLeagueInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutAwayMatchesInput {
  create: TeamCreateWithoutAwayMatchesInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutHomeMatchesInput {
  create: TeamCreateWithoutHomeMatchesInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutAwayMatchesInput {
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  league: CompetitionCreateOneWithoutTeamsInput!
  players: PlayerCreateManyWithoutTeamInput
  homeMatches: MatchCreateManyWithoutHomeTeamInput
}

input TeamCreateWithoutHomeMatchesInput {
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  league: CompetitionCreateOneWithoutTeamsInput!
  players: PlayerCreateManyWithoutTeamInput
  awayMatches: MatchCreateManyWithoutAwayTeamInput
}

input TeamCreateWithoutLeagueInput {
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  players: PlayerCreateManyWithoutTeamInput
  homeMatches: MatchCreateManyWithoutHomeTeamInput
  awayMatches: MatchCreateManyWithoutAwayTeamInput
}

input TeamCreateWithoutPlayersInput {
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
  league: CompetitionCreateOneWithoutTeamsInput!
  homeMatches: MatchCreateManyWithoutHomeTeamInput
  awayMatches: MatchCreateManyWithoutAwayTeamInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  shortName_ASC
  shortName_DESC
  slugName_ASC
  slugName_DESC
  originId_ASC
  originId_DESC
  squad_ASC
  squad_DESC
  age_ASC
  age_DESC
  foreigners_ASC
  foreigners_DESC
  totalMarketValue_ASC
  totalMarketValue_DESC
  averageMarketValue_ASC
  averageMarketValue_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  shortName: String!
  slugName: String!
  originId: Int!
  squad: Int!
  age: Float!
  foreigners: Int!
  totalMarketValue: String!
  averageMarketValue: String!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
  league: CompetitionUpdateOneRequiredWithoutTeamsInput
  players: PlayerUpdateManyWithoutTeamInput
  homeMatches: MatchUpdateManyWithoutHomeTeamInput
  awayMatches: MatchUpdateManyWithoutAwayTeamInput
}

input TeamUpdateManyMutationInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
}

input TeamUpdateManyWithoutLeagueInput {
  create: [TeamCreateWithoutLeagueInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutLeagueInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutLeagueInput!]
}

input TeamUpdateOneRequiredWithoutAwayMatchesInput {
  create: TeamCreateWithoutAwayMatchesInput
  update: TeamUpdateWithoutAwayMatchesDataInput
  upsert: TeamUpsertWithoutAwayMatchesInput
  connect: TeamWhereUniqueInput
}

input TeamUpdateOneRequiredWithoutHomeMatchesInput {
  create: TeamCreateWithoutHomeMatchesInput
  update: TeamUpdateWithoutHomeMatchesDataInput
  upsert: TeamUpsertWithoutHomeMatchesInput
  connect: TeamWhereUniqueInput
}

input TeamUpdateOneRequiredWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  update: TeamUpdateWithoutPlayersDataInput
  upsert: TeamUpsertWithoutPlayersInput
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutAwayMatchesDataInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
  league: CompetitionUpdateOneRequiredWithoutTeamsInput
  players: PlayerUpdateManyWithoutTeamInput
  homeMatches: MatchUpdateManyWithoutHomeTeamInput
}

input TeamUpdateWithoutHomeMatchesDataInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
  league: CompetitionUpdateOneRequiredWithoutTeamsInput
  players: PlayerUpdateManyWithoutTeamInput
  awayMatches: MatchUpdateManyWithoutAwayTeamInput
}

input TeamUpdateWithoutLeagueDataInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
  players: PlayerUpdateManyWithoutTeamInput
  homeMatches: MatchUpdateManyWithoutHomeTeamInput
  awayMatches: MatchUpdateManyWithoutAwayTeamInput
}

input TeamUpdateWithoutPlayersDataInput {
  name: String
  shortName: String
  slugName: String
  originId: Int
  squad: Int
  age: Float
  foreigners: Int
  totalMarketValue: String
  averageMarketValue: String
  league: CompetitionUpdateOneRequiredWithoutTeamsInput
  homeMatches: MatchUpdateManyWithoutHomeTeamInput
  awayMatches: MatchUpdateManyWithoutAwayTeamInput
}

input TeamUpdateWithWhereUniqueWithoutLeagueInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLeagueDataInput!
}

input TeamUpsertWithoutAwayMatchesInput {
  update: TeamUpdateWithoutAwayMatchesDataInput!
  create: TeamCreateWithoutAwayMatchesInput!
}

input TeamUpsertWithoutHomeMatchesInput {
  update: TeamUpdateWithoutHomeMatchesDataInput!
  create: TeamCreateWithoutHomeMatchesInput!
}

input TeamUpsertWithoutPlayersInput {
  update: TeamUpdateWithoutPlayersDataInput!
  create: TeamCreateWithoutPlayersInput!
}

input TeamUpsertWithWhereUniqueWithoutLeagueInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutLeagueDataInput!
  create: TeamCreateWithoutLeagueInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  shortName: String
  shortName_not: String
  shortName_in: [String!]
  shortName_not_in: [String!]
  shortName_lt: String
  shortName_lte: String
  shortName_gt: String
  shortName_gte: String
  shortName_contains: String
  shortName_not_contains: String
  shortName_starts_with: String
  shortName_not_starts_with: String
  shortName_ends_with: String
  shortName_not_ends_with: String
  slugName: String
  slugName_not: String
  slugName_in: [String!]
  slugName_not_in: [String!]
  slugName_lt: String
  slugName_lte: String
  slugName_gt: String
  slugName_gte: String
  slugName_contains: String
  slugName_not_contains: String
  slugName_starts_with: String
  slugName_not_starts_with: String
  slugName_ends_with: String
  slugName_not_ends_with: String
  originId: Int
  originId_not: Int
  originId_in: [Int!]
  originId_not_in: [Int!]
  originId_lt: Int
  originId_lte: Int
  originId_gt: Int
  originId_gte: Int
  squad: Int
  squad_not: Int
  squad_in: [Int!]
  squad_not_in: [Int!]
  squad_lt: Int
  squad_lte: Int
  squad_gt: Int
  squad_gte: Int
  age: Float
  age_not: Float
  age_in: [Float!]
  age_not_in: [Float!]
  age_lt: Float
  age_lte: Float
  age_gt: Float
  age_gte: Float
  foreigners: Int
  foreigners_not: Int
  foreigners_in: [Int!]
  foreigners_not_in: [Int!]
  foreigners_lt: Int
  foreigners_lte: Int
  foreigners_gt: Int
  foreigners_gte: Int
  totalMarketValue: String
  totalMarketValue_not: String
  totalMarketValue_in: [String!]
  totalMarketValue_not_in: [String!]
  totalMarketValue_lt: String
  totalMarketValue_lte: String
  totalMarketValue_gt: String
  totalMarketValue_gte: String
  totalMarketValue_contains: String
  totalMarketValue_not_contains: String
  totalMarketValue_starts_with: String
  totalMarketValue_not_starts_with: String
  totalMarketValue_ends_with: String
  totalMarketValue_not_ends_with: String
  averageMarketValue: String
  averageMarketValue_not: String
  averageMarketValue_in: [String!]
  averageMarketValue_not_in: [String!]
  averageMarketValue_lt: String
  averageMarketValue_lte: String
  averageMarketValue_gt: String
  averageMarketValue_gte: String
  averageMarketValue_contains: String
  averageMarketValue_not_contains: String
  averageMarketValue_starts_with: String
  averageMarketValue_not_starts_with: String
  averageMarketValue_ends_with: String
  averageMarketValue_not_ends_with: String
  league: CompetitionWhereInput
  players_every: PlayerWhereInput
  players_some: PlayerWhereInput
  players_none: PlayerWhereInput
  homeMatches_every: MatchWhereInput
  homeMatches_some: MatchWhereInput
  homeMatches_none: MatchWhereInput
  awayMatches_every: MatchWhereInput
  awayMatches_some: MatchWhereInput
  awayMatches_none: MatchWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  slugName: String
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`