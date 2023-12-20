import { Request, Response } from 'express';
import PlayerService from '../services/playerService';

import Team from '../database/models/Team';

class PlayerController {
  constructor(private playerService = new PlayerService()) {}

  async getAllPlayers(_req: Request, res: Response) {
    try {
      const players = await this.playerService.getAllPlayers();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for players'})
    }
  }

  async createPlayer(req: Request, res: Response) {
    const { position, name, punctuation, price, appreciation, teamId } = req.body;

    try {     
      if (!name || !teamId) {
        return res.status(400).json({ error: 'Name and team ID are mandatory' });
      }

      const teamExists = await Team.findOne(teamId);      
      if (!teamExists) {
        return res.status(404).json({ error: 'Team not found' });
      }

      const playerData = {
        position,
        name,
        punctuation,
        price,
        appreciation,
        teamId,
      };
      
      const newPlayer = await this.playerService.createPlayer(playerData);
      res.status(201).json({ newPlayer });
    } catch (error: any) {
      if (error.message === 'Player with this name already exists') {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: 'Error when creating a new player' });
    }
  }
  
  async getPlayerById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const player = await this.playerService.getPlayerById(Number(id));
      if (!player) {
        return res.status(404).json({ message: 'Player not found' });
      }
      res.status(200).json(player);
    } catch (error) {
      res.status(500).json({ error: 'Error when searching for player by ID'})
    }
  }

  async updatePlayer(req: Request, res: Response) {
    const { id } = req.params;
    const playerData = req.body;
    
    try {
      const updated = await this.playerService.updatePlayer(Number(id), playerData);
      if (!updated) {
        return res.status(404).json({ message: 'Player not update' });
      }
      return res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ error: 'Error when updating player' });
    }
  }

  async deletePlayer(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const player = await this.playerService.getPlayerById(Number(id));      
      if (!player) {
        return res.status(404).json({ message: 'Player not found' });
      }
      await this.playerService.deletePlayer(Number(id))
      return res.status(204).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: 'Error when deleting player' });
    }
  }
}
  
export default PlayerController;