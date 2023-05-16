import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private _teamService: TeamService = new TeamService()) {}

  public async getAll(_req: Request, res: Response): Promise<void> {
    const { status, message } = await this._teamService.getAll();

    res.status(status).json(message);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status, message } = await this._teamService.getById(+id);

    res.status(status).json(message);
  }
}
