import { Router } from 'express';
import CoachController from '../controllers/coachController';

const coachRouter = Router();

const coachController = new CoachController();

coachRouter.get('/', (req, res) => coachController.getAllCoaches(req, res));
coachRouter.post('/', (req, res) => coachController.createCoach(req, res));
coachRouter.get('/:id', (req, res) => coachController.getCoachById(req, res));
coachRouter.patch('/:id', (req, res) => coachController.updateCoach(req, res));
coachRouter.delete('/:id', (req, res) => coachController.deleteCoach(req, res));

export default coachRouter;