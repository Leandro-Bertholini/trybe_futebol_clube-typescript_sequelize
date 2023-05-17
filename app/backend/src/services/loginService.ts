import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';

export default class loginService {
  constructor(private _userModel = UserModel) {}

  public async authorizationToken({ email, password }: ILogin) {
    if (!email || !password) return 'Some required fields are missing';
  }
}
