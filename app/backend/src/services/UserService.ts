import * as bcrypt from 'bcryptjs';
import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import { statusResponse, statusResponseError } from '../utils/rotesResponses';
import IStatusMessage from '../interfaces/IStatusMessage';
import { generateToken } from '../Token/tokenValidation';

export default class UserService {
  constructor(private _userModel = UserModel) {}

  public async authorizationToken({ email, password }: ILogin): Promise<IStatusMessage> {
    const user = await this._userModel.findOne({
      where: { email },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      statusResponseError(401, 'Invalid email or password');
    }

    const token = generateToken({ id: (user as UserModel).id, email });

    return statusResponse(200, { token });
  }
}
