const express = require('express');
const TeamController = require('../controllers/teamController');

const teamRouter = express.Router();

// Rota de login de usuário
teamRouter.get('/', (req, res) => TeamController.getAllTeams(req, res));
teamRouter.get('/:id', (req, res) => TeamController.getTeamById(req, res));

module.exports = teamRouter;