import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import IToken from './tokenInterface/IToken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '15d',
  algorithm: 'HS256', // Algoritmo utilizado
};

function generateToken(payload: IToken) {
  return jwt.sign(payload, TOKEN_SECRET, jwtConfig);
}

export default generateToken;
