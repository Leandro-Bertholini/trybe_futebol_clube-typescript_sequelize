export default interface ITeam {
  teamName: string
}

export interface ITeamId extends ITeam{
  id: number,
}

export interface ITeamArray extends ITeamId {
  getAllTeams(): Promise<ITeamId[]>
}
