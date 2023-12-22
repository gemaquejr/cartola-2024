import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/', (req, res) => leaderboardController.getLeaderboard(req, res));

export default leaderboardRouter;