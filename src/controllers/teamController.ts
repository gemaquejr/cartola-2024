import { Request, Response } from 'express';
import TeamService from '../services/teamService';
import Team from '../database/models/Team';

class TeamController {
  constructor(private teamService = new TeamService()) {}

  async getAllTeams(_req: Request, res: Response) {
    try {
      const teams = await this.teamService.getAllTeams();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for teams'})
    }
  }

  async createTeam(req: Request, res: Response) {
    const { teamName, stadiumName, teamLogo } = req.body;

    try {
      if (!teamName) {
        return res.status(400).json({ error: 'Team name is mandatory' });
      }

      const existingTeam = await Team.findOne({ where: { teamName } });      
      if (existingTeam) {
        throw new Error('Team with this name already exists');
      }

      const teamData = {
        teamName,
        stadiumName,
        teamLogo,
      };
      
      const newTeam = await this.teamService.createTeam(teamData);
      res.status(201).json(newTeam);
    } catch (error: any) {
      if (error.message === 'Team with this name already exists') {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: 'Error when creating a new team' });
    }
  }
  
  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const team = await this.teamService.getTeamById(Number(id));
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(200).json(team);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for team by ID'})
    }
  }

  async updateTeam(req: Request, res: Response) {
    const { id } = req.params;
    const teamData = req.body;
    
    try {
      const updated = await this.teamService.updateTeam(Number(id), teamData);
      if (!updated) {
        return res.status(404).json({ message: 'Team not update' });
      }
      return res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: 'Error when updating team' });
    }
  }

  async deleteTeam(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const team = await this.teamService.getTeamById(Number(id));      
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      await this.teamService.deleteTeam(Number(id))
      return res.status(204).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: 'Error when deleting team' });
    }
  }
}
  
export default TeamController;