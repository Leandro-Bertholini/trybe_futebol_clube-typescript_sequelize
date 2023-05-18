import { Router } from 'express';
import UserController from '../controllers/userController';
import loginFieldValidation from '../middlewares/loginFieldValidation';
import loginCharactersValidation from '../middlewares/loginCharactersValidation';
import { authenticateToken } from '../Token/tokenValidation';

const route = Router();

const userController = new UserController();

route.post(
  '/',
  loginFieldValidation,
  loginCharactersValidation,
  (req, res) => userController.authorizationToken(req, res),
);
route.get('/role', authenticateToken, (req, res) => userController.userRole(req, res));

export default route;
