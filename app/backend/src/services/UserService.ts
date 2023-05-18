import * as bcrypt from 'bcryptjs';
import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import IStatusMessage from '../interfaces/IStatusMessage';
import { generateToken } from '../Token/tokenValidation';

export default class UserService {
  constructor(private _userModel = UserModel) {}

  public async authorizationToken({ email, password }: ILogin): Promise<IStatusMessage> {
    const user = await this._userModel.findOne({
      where: { email },
    });

    if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
      return { status: 401, message: 'Invalid email or password' };
    }
    const token = generateToken({ id: (user as UserModel).id, email });

    return { status: 200, token };
  }

  public async userRole(id: number): Promise<IStatusMessage> {
    const user = await this._userModel.findByPk(id);

    return { status: 200, role: (user as UserModel).role };
  }
}
