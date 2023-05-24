import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboard = new LeaderboardService()) {}

  public async allHomeTeams(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this._leaderboard.allHomeTeams();

    return res.status(status).json(data);
  }
}
