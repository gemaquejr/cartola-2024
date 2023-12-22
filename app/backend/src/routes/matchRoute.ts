import { Router } from 'express';
import MatchController from '../controllers/matchController';

const matchRouter = Router();

const matchController = new MatchController();

matchRouter.get('/', (req, res) => matchController.getAllMatches(req, res));
matchRouter.post('/', (req, res) => matchController.createMatch(req, res));
matchRouter.get('/:id', (req, res) => matchController.getMatchById(req, res));
matchRouter.patch('/:id', (req, res) => matchController.updateMatch(req, res));
matchRouter.delete('/:id', (req, res) => matchController.deleteMatch(req, res));

export default matchRouter;