import { Request, Response } from 'express';
import CoachService from '../services/coachService';

import Team from '../database/models/Team';

class CoachController {
  constructor(private coachService = new CoachService()) {}

  async getAllCoaches(_req: Request, res: Response) {
    try {
      const coaches = await this.coachService.getAllCoaches();
      res.status(200).json(coaches);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for coaches'})
    }
  }

  async createCoach(req: Request, res: Response) {
    const { name, nacionality, age, teamId } = req.body;

    try {
      if (!name || !teamId) {
        return res.status(400).json({ error: 'Name and team ID are mandatory' });
      }

      const teamExists = await Team.findByPk(teamId);      
      if (!teamExists) {
        return res.status(404).json({ error: 'Team not found' });
      }

      const coachData = {
        name,
        nacionality,
        age,
        teamId,
      };
      
      const newCoach = await this.coachService.createCoach(coachData);
      res.status(201).json({ newCoach });
    } catch (error: any) {
      if (error.message.includes('Coach with this name already exists in this team')) {
        return res.status(400).json({ error: 'Coach with this name already exists in this team' });
      }
      res.status(500).json({ error: 'Error when creating a new coach' });
    }
  }
  
  async getCoachById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const coach = await this.coachService.getCoachById(Number(id));
      if (!coach) {
        return res.status(404).json({ message: 'Coach not found' });
      }
      res.status(200).json(coach);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for coach by ID'})
    }
  }

  async updateCoach(req: Request, res: Response) {
    const { id } = req.params;
    const coachData = req.body;
    
    try {
      const updated = await this.coachService.updateCoach(Number(id), coachData);
      if (!updated) {
        return res.status(404).json({ message: 'Coach not update' });
      }
      return res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: 'Error when updating coach' });
    }
  }

  async deleteCoach(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const coach = await this.coachService.getCoachById(Number(id));      
      if (!coach) {
        return res.status(404).json({ message: 'Coach not found' });
      }
      await this.coachService.deleteCoach(Number(id))
      return res.status(204).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: 'Error when deleting coach' });
    }
  }
}
  
export default CoachController;