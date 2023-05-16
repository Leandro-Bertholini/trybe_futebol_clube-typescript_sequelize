// import { ITeamFull } from '../interfaces/ITeam';
import IStatusMessage from '../interfaces/IStatusMessage';
import TeamModel from '../database/models/TeamModel';
import { statusResponse } from '../utils/rotesResponses';

export default class TeamService {
  constructor(private _teamModel = TeamModel) {}

  public async getAll(): Promise<IStatusMessage> {
    const allTeams = await this._teamModel.findAll();

    return statusResponse(200, allTeams);
  }

  public async getById(id: number): Promise<IStatusMessage> {
    const team = await this._teamModel.findByPk(id);

    return statusResponse(200, team);
  }
}
