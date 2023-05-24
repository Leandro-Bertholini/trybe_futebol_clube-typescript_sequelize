import { QueryTypes } from 'sequelize';
import sequelize from '../database/models';
import { ITeamData } from '../interfaces/ITeam';
import homeTeamsPerformance from '../utils/queries';
import IStatusMessage from '../interfaces/IStatusMessage';

export default class LeaderboardService {
  constructor(private _sequelize = sequelize) {}

  public async allHomeTeams(): Promise<IStatusMessage> {
    const board: ITeamData[] = await this._sequelize.query(
      homeTeamsPerformance,
      { type: QueryTypes.SELECT },
    );

    return { status: 200, data: board };
  }
}
