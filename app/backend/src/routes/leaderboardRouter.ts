import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const route = Router();

const leaderboardController = new LeaderboardController();

route.get('/', (req, res) => leaderboardController.getAll(req, res));

export default route;
