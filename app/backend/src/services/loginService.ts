import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import { statusResponseError } from '../utils/rotesResponses';
// import IStatusMessage from '../interfaces/IStatusMessage';

export default class loginService {
  constructor(private _userModel = UserModel) {}

  public async authorizationToken({ email, password }: ILogin): Promise<void> {
    const user = await this._userModel.findOne({
      attributes: ['id', 'email'],
      where: { email, password },
    });
    if (!user) return statusResponseError(401, 'Invalid email or password');
  }
}
