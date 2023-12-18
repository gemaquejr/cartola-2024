import { Request, Response } from 'express';
import PlayerService from '../services/playerService';
import Player from '../database/models/Player';

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
    const { name } = req.body;

    try {
      if (!name) {
        return res.status(400).json({ error: 'Name is mandatory' });
      }

      const existingPlayer = await Player.findOne({ where: { name } });      
      if (existingPlayer) {
        throw new Error('Player with this name already exists');
      }
      
      const newPlayer = await this.playerService.createPlayer(name);
      res.status(201).json(newPlayer);
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
    const { name } = req.body;
    
    try {
      const updated = await this.playerService.updatePlayer(Number(id), { name });
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
      const team = await this.playerService.getPlayerById(Number(id));      
      if (!team) {
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