export const typeDefs = /* GraphQL */ `type AggregateCompetition {
  count: Int!
}

type AggregatePlayer {
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
}

type CompetitionConnection {
  pageInfo: PageInfo!
  edges: [CompetitionEdge]!
  aggregate: AggregateCompetition!
}

input CompetitionCreateInput {
  name: String!
  teams: TeamCreateManyWithoutLeagueInput
}

input CompetitionCreateOneWithoutTeamsInput {
  create: CompetitionCreateWithoutTeamsInput
  connect: CompetitionWhereUniqueInput
}

input CompetitionCreateWithoutTeamsInput {
  name: String!
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
  AND: [CompetitionWhereInput!]
  OR: [CompetitionWhereInput!]
  NOT: [CompetitionWhereInput!]
}

input CompetitionWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createCompetition(data: CompetitionCreateInput!): Competition!
  updateCompetition(data: CompetitionUpdateInput!, where: CompetitionWhereUniqueInput!): Competition
  updateManyCompetitions(data: CompetitionUpdateManyMutationInput!, where: CompetitionWhereInput): BatchPayload!
  upsertCompetition(where: CompetitionWhereUniqueInput!, create: CompetitionCreateInput!, update: CompetitionUpdateInput!): Competition!
  deleteCompetition(where: CompetitionWhereUniqueInput!): Competition
  deleteManyCompetitions(where: CompetitionWhereInput): BatchPayload!
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
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
}

input PlayerCreateManyWithoutTeamInput {
  create: [PlayerCreateWithoutTeamInput!]
  connect: [PlayerWhereUniqueInput!]
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
}

type PlayerEdge {
  node: Player!
  cursor: String!
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
}

input PlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutTeamDataInput!
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
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
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
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
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
}

input TeamCreateManyWithoutLeagueInput {
  create: [TeamCreateWithoutLeagueInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  connect: TeamWhereUniqueInput
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

input TeamUpdateOneRequiredWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  update: TeamUpdateWithoutPlayersDataInput
  upsert: TeamUpsertWithoutPlayersInput
  connect: TeamWhereUniqueInput
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
}

input TeamUpdateWithWhereUniqueWithoutLeagueInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLeagueDataInput!
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