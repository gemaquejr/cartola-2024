import { Request, Response } from 'express';
import Team from '../database/models/Team';

const TeamController = {
  
  async getAllTeams(_req: Request, res: Response) {
    try {
      const teams = await Team.findAll();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for teams'})
    }
  },

  async createTeam(req: Request, res: Response) {
    const { teamName } = req.body;

    try {
      if (!teamName) {
        return res.status(400).json({ error: 'Team name is mandatory' });
      }

      const newTeam = await Team.create({ teamName });
      res.status(201).json(newTeam);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error when creating a new team' });
    }
  },
  
  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const team = await Team.findByPk(id);
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(200).json(team);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for team by ID'})
    }
  },

  async updateTeam(req: Request, res: Response) {
    const { id } = req.params;
    const { teamName } = req.body;

    try {
      const [updated] = await Team.update({ teamName }, { where: { id } });
      if (updated === 0) {
        return res.status(404).json({ message: 'Team not found' });
      }
      const teamUpdated = await Team.findByPk(id);
      res.status(200).json(teamUpdated);
    } catch (error) {
      res.status(500).json({ error: 'Error when updating team' });
    }
  },

  async deleteTeam(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deleted = await Team.destroy({ where: { id } });
      if (deleted === 0) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error when deleting team' });
    }
  },
}
  
export default TeamController;