import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginFieldValidation from '../middlewares/loginFieldValidation';
import loginCharactersValidation from '../middlewares/loginCharactersValidation';

const route = Router();

const loginController = new LoginController();

route.post(
  '/',
  loginFieldValidation,
  loginCharactersValidation,
  loginController.authorizationToken,
);

export default route;
