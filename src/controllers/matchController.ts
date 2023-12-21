import { Request, Response } from 'express';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private matchService = new MatchService()) {}

  async getAllMatches(_req: Request, res: Response) {
    try {
      const matches = await this.matchService.getAllMatches();
      res.status(200).json(matches);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for matches'})
    }
  }

  async createMatch(req: Request, res: Response) {
    try {
      const match = await this.matchService.createMatch(req.body);
      return res.status(201).json(match);
    } catch (error: any) {
      return res.status(401).json({ message: error.message})
    }
  }
  
  async getMatchById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const match = await this.matchService.getMatchById(Number(id));
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }
      res.status(200).json(match);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for match by ID'})
    }
  }

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const matchData = req.body;
    
    try {
      const updated = await this.matchService.updateMatch(Number(id), matchData);
      if (!updated) {
        return res.status(404).json({ message: 'Match not update' });
      }
      return res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: 'Error when updating match' });
    }
  }

  async deleteMatch(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const match = await this.matchService.getMatchById(Number(id));      
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }
      await this.matchService.deleteMatch(Number(id))
      return res.status(204).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: 'Error when deleting match' });
    }
  }
}
  
export default MatchController;