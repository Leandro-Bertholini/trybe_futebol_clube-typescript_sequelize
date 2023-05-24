import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const route = Router();

const leaderboardController = new LeaderboardController();

route.get('/leaderboard/home', leaderboardController.allHomeTeams);

export default route;
