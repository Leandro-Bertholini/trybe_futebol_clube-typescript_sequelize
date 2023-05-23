export default interface ITeamName {
  teamName: string,
}

export interface ITeamFull extends ITeamName{
  id: number,
}

export interface ITeamData {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance?: number,
  efficiency?: string
}
