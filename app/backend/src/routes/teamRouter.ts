import { Router } from 'express';
import TeamController from '../controllers/teamController';

const route = Router();

const teamController = new TeamController();

route.get('/', (req, res) => teamController.getAll(req, res));
route.get('/:id', (req, res) => teamController.getAll(req, res));

export default route;
