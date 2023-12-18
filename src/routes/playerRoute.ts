import { Router } from 'express';
import PlayerController from '../controllers/playerController';

const playerRouter = Router();

const playerController = new PlayerController();

playerRouter.get('/', (req, res) => playerController.getAllPlayers(req, res));
playerRouter.post('/', (req, res) => playerController.createPlayer(req, res));
playerRouter.get('/:id', (req, res) => playerController.getPlayerById(req, res));
playerRouter.patch('/:id', (req, res) => playerController.updatePlayer(req, res));
playerRouter.delete('/:id', (req, res) => playerController.deletePlayer(req, res));

export default playerRouter;