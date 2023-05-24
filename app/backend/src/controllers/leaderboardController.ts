import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboard = new LeaderboardService()) {}

  public async allHomeTeams(_req: Request, res: Response) {
    const data = await this._leaderboard.allHomeTeams();
    // console.log('retorno do service para o controller com os dados: ', data);

    return res.status(200).json(data);
  }
}
