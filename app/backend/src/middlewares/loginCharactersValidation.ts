import { Request, Response, NextFunction } from 'express';
import ILogin from '../interfaces/ILogin';

function loginCharactersValidation(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as ILogin;

  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const passwordLength = 6;

  if (!regex.test(email) || password.length < passwordLength) {
    return res.status(401).json({ message: 'Invalid email or password'});
  }
  next();
}

export default loginCharactersValidation;
