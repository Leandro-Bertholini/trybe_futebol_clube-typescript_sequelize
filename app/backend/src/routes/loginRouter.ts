import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginFieldValidation from '../middlewares/loginFieldValidation';

const route = Router();

const loginController = new loginController();

route.post('/', loginFieldValidation, loginController);

export default route;
