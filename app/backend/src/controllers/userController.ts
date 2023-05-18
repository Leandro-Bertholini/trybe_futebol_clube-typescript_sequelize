import { Request, Response } from 'express';
import UserService from '../services/UserService';
import ILogin from '../interfaces/ILogin';

export default class UserController {
  constructor(private _userService: UserService = new UserService()) {}

  public async authorizationToken(req: Request, res: Response): Promise<void> {
    const { status, message } = await this._userService.authorizationToken(req.body as ILogin);

    res.status(status).json(message);
  }
}
