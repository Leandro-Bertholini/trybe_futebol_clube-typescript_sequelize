import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private _teamService: TeamService = new TeamService()) {}

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, message, data } = await this._teamService.getAll();

    if (message) return res.status(status).json({ message });

    return res.status(status).json(data);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, message, data } = await this._teamService.getById(+id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(data);
  }
}
