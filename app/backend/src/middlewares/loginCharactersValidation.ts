import { Request, Response, NextFunction } from 'express';
import ILogin from '../interfaces/ILogin';
import { statusResponseError } from '../utils/rotesResponses';

function loginCharactersValidation(req: Request, _res: Response, next: NextFunction) {
  const { email, password } = req.body as ILogin;

  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const passwordLength = 6;

  if (!regex.test(email) || password.length < passwordLength) {
    return statusResponseError(401, 'Invalid email or password');
  }
  next();
}

export default loginCharactersValidation;
