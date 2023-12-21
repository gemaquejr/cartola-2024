import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
    constructor(private leaderboardService = new LeaderboardService()) {}

    async getLeaderboard(_req: Request, res: Response) {
        try {
          const result = await this.leaderboardService.getLeaderboard();
          return res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error when searching for leaderboard'})
        } 
    }
}

export default LeaderboardController;