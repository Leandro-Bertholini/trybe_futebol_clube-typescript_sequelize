import { QueryTypes } from 'sequelize';
import Sequelize from '../database/models';
import { ITeamData } from '../interfaces/ITeam';

export default class LeaderboardService {
  constructor(private _models = Sequelize) {}

  public async getAll() {
    const board: ITeamData[] = await this._models.query({ type: QueryTypes.SELECT });

    return { status: 200, data: board };
  }
}