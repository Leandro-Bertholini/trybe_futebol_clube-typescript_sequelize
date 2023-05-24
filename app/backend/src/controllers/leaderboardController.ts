import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboard = new LeaderboardService()) {}

  public async performanceAllHomeTeams(req: Request, res: Response): Promise<Response> {
    const { path } = req;
    const teamsData = await this._leaderboard.performanceAllHomeTeams(path);

    return res.status(200).json(teamsData);
  }

  // public async performanceAllAwayTeams(req: Request, res: Response): Promise<Response> {
  //   const params = req.path.split('/')[1];
  //   const { status, data } = await this._leaderboard.performanceAllAwayTeams(params);

  //   return res.status(status).json(data);
  // }
}
