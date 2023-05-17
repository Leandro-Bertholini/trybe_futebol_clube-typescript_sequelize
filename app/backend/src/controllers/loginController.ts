import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import ILogin from '../interfaces/ILogin';

export default class loginController {
  constructor(private _loginService = new LoginService()) {}

  public async authorizationToken(req: Request, res: Response): Promise<void> {
    const { status, message } = await this._loginService.authorizationToken(req.body as ILogin);

    res.status(status).json(message);
  }
}
