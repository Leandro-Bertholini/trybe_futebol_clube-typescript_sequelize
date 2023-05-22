import { Request, Response, NextFunction } from 'express';

const validationToCreateMatches = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = req.body;

  if (!homeTeamId || !homeTeamGoals || !awayTeamId || !awayTeamGoals) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export default validationToCreateMatches;
