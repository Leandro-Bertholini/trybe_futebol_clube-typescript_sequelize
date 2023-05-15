// import { ITeamFull } from '../interfaces/ITeam';
import IStatusMessage from '../interfaces/IStatusMessage';
import TeamModel from '../database/models/TeamModel';
import { statusResponse } from '../utils/rotesResponses';
// import IStatusMessage from '../interfaces/IResponseStatus';

export default class TeamService {
  constructor(private _teamModel = TeamModel) {}

  public async getAll(): Promise<IStatusMessage> {
    const allTeams = await this._teamModel.findAll();
    // console.log(allTeams);
    return statusResponse(200, allTeams);
  }
}
