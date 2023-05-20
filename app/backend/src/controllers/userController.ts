import { Request, Response } from 'express';
import UserService from '../services/UserService';
import ILogin from '../interfaces/ILogin';

export default class UserController {
  constructor(private _userService: UserService = new UserService()) {}

  public async authorizationToken(req: Request, res: Response): Promise<Response> {
    const { status, message, token } = await this
      ._userService.authorizationToken(req.body as ILogin);

    if (message) return res.status(status).json({ message });

    return res.status(status).json({ token });
  }

  public async userRole(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user;

    const { status, message, role } = await this._userService.userRole(id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json({ role });
  }
}
