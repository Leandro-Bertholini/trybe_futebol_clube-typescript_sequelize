import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const route = Router();

const leaderboardController = new LeaderboardController();

route.get('/home', (req, res) => leaderboardController.allHomeTeams(req, res));

export default route;
