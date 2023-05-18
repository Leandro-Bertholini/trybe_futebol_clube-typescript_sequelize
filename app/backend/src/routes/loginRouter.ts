import { Router } from 'express';
import UserController from '../controllers/userController';
import loginFieldValidation from '../middlewares/loginFieldValidation';
import loginCharactersValidation from '../middlewares/loginCharactersValidation';

const route = Router();

const userController = new UserController();

route.post(
  '/',
  loginFieldValidation,
  loginCharactersValidation,
  (req, res) => userController.authorizationToken(req, res),
);

export default route;
