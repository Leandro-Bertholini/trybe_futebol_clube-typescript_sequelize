import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const route = Router();

const leaderboardController = new LeaderboardController();

route.get('/home', (req, res) => leaderboardController.performanceAllHomeTeams(req, res));
// route.get('/away', (req, res) => leaderboardController.performanceAllAwayTeams(req, res));

export default route;
