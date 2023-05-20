import { Router } from 'express';
import MatchController from '../controllers/matchController';

const route = Router();

const matchController = new MatchController();

route.get('/', (req, res) => matchController.getAll(req, res));

export default route;
