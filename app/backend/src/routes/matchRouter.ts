import { Router } from 'express';
import MatchController from '../controllers/matchController';
import { authenticateToken } from '../Token/tokenValidation';
import validationToCreateMatches from '../middlewares/validationToCreateMatches';

const route = Router();

const matchController = new MatchController();

route.get('/', (req, res) => matchController.getAll(req, res));
route.patch('/:id/finish', authenticateToken, (req, res) => matchController.finalize(req, res));
route.patch('/:id', authenticateToken, (req, res) => matchController.updateGoals(req, res));
route.post(
  '/',
  authenticateToken,
  validationToCreateMatches,
  (req, res) => matchController.create(req, res),
);

export default route;
