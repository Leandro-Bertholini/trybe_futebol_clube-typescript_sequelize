import { Router } from 'express';
import loginController from '../controllers/loginController';

const route = Router();

const loginController = new loginController();

route.post('/', loginController.authorizationToken);

export default route;
