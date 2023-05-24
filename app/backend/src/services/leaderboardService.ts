import sequelize from '../database/models';
import { ITeamData } from '../interfaces/ITeam';
import homeTeamsPerformance from '../utils/queriesDeveloper/homeTeamsPerformance';
import homeTeamsRanking from '../utils/queriesDeveloper/homeTeamsRanking';

export default class LeaderboardService {
  constructor(private _sequelize = sequelize) {}

  public async performanceAllHomeTeams(param: string): Promise<ITeamData[]> {
    if (param === 'home') {
      const [board] = await this._sequelize
        .query(homeTeamsPerformance);
      return board as ITeamData[];
    }
    const [teamsPerformance] = await this._sequelize
      .query(homeTeamsRanking);
    return teamsPerformance as ITeamData[];
  }
}
