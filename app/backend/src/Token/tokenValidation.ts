import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import IToken from './tokenInterface/IToken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '15d',
  algorithm: 'HS256', // Algoritmo utilizado
};

function generateToken(payload: IToken) {
  return jwt.sign(payload, TOKEN_SECRET, jwtConfig);
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decryptToken = jwt.verify(token, TOKEN_SECRET);
    res.locals.user = decryptToken;
    // req.user: String = decryptToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}

export { generateToken, authenticateToken };
