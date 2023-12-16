import { Router } from 'express';
import TeamController from '../controllers/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.get('/', (req, res) => teamController.getAllTeams(req, res));
teamRouter.post('/', (req, res) => teamController.createTeam(req, res));
teamRouter.get('/:id', (req, res) => teamController.getTeamById(req, res));
teamRouter.patch('/:id', (req, res) => teamController.updateTeam(req, res));
teamRouter.delete('/:id', (req, res) => teamController.deleteTeam(req, res));

export default teamRouter;