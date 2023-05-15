import { ITeamFull } from '../interfaces/ITeam';
import TeamModel from '../database/models/TeamModel';
// import IStatusMessage from '../interfaces/IResponseStatus';
// import IBelongsToService from './servicesInterfaces/teamsMethods';

export default class TeamService {
  constructor(private _teamModel = TeamModel) {}

  public async getAll(): Promise<ITeamFull[]> {
    const allTeams = await this._teamModel.findAll();
    console.log(allTeams);
    return allTeams;
  }
}
