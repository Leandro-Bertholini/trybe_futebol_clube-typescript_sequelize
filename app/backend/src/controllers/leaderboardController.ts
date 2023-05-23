import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboard = new LeaderboardService()) {}

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this._leaderboard.getAll();

    res.status(status).json(data);
  }
}
