import { QueryTypes } from 'sequelize';
import sequelize from '../database/models';
// import { ITeamData } from '../interfaces/ITeam';
// import queries from '../utils/queries';
import query2 from '../utils/query2';

export default class LeaderboardService {
  constructor(private _sequelize = sequelize) {}
  // model = sequelize;
  // constructor() {
  //   this.model = sequelize;
  // }

  public async allHomeTeams() {
    const board = await this._sequelize.query(query2, { type: QueryTypes.SELECT });
    // console.log('retorno dos times da casa: ', board);

    return board;
  }
}

// { type: QueryTypes.SELECT };
