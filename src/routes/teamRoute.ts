import { Router } from 'express';
import TeamController from '../controllers/teamController';

const teamRouter = Router();

teamRouter.get('/', (req, res) => TeamController.getAllTeams(req, res));
teamRouter.post('/', (req, res) => TeamController.createTeam(req, res));
teamRouter.get('/:id', (req, res) => TeamController.getTeamById(req, res));
teamRouter.patch('/:id', (req, res) => TeamController.updateTeam(req, res));
teamRouter.delete('/:id', (req, res) => TeamController.deleteTeam(req, res));

export default teamRouter;