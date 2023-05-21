import { Request, Response } from 'express';
import MatchService from '../services/matchService';

export default class matchController {
  constructor(private _matchService: MatchService = new MatchService()) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    const { status, message, data } = await this._matchService.getAll(inProgress as string);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(data);
  }

  public async finalize(req: Request, res: Response): Promise<Response> {
    const { id } = req.query;
    const { status, message } = await this._matchService.finalize(id as string);

    return res.status(status).json({ message });
  }
}
