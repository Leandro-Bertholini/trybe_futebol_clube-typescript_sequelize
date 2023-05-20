import IStatusMessage from '../interfaces/IStatusMessage';
import TeamModel from '../database/models/TeamModel';

export default class TeamService {
  constructor(private _teamModel = TeamModel) {}

  public async getAll(): Promise<IStatusMessage> {
    const allTeams = await this._teamModel.findAll();

    if (!allTeams) return { status: 500, message: 'Ops! server error' };

    return { status: 200, data: allTeams };
    // return statusResponse(200, allTeams);
  }

  public async getById(id: number): Promise<IStatusMessage> {
    const team = await this._teamModel.findByPk(id);

    if (!team) return { status: 404, message: 'Non-existent team' };

    return { status: 200, data: team };
    // return statusResponse(200, team);
  }
}
