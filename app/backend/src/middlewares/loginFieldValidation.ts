import { Request, Response, NextFunction } from 'express';
import ILogin from '../interfaces/ILogin';

function loginFieldValidation(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as ILogin;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
}

export default loginFieldValidation;
