"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = __importDefault(require("../controllers/teamController"));
const teamRouter = (0, express_1.Router)();
const teamController = new teamController_1.default();
teamRouter.get('/', (req, res) => teamController.getAllTeams(req, res));
teamRouter.post('/', (req, res) => teamController.createTeam(req, res));
teamRouter.get('/:id', (req, res) => teamController.getTeamById(req, res));
teamRouter.patch('/:id', (req, res) => teamController.updateTeam(req, res));
teamRouter.delete('/:id', (req, res) => teamController.deleteTeam(req, res));
exports.default = teamRouter;
//# sourceMappingURL=teamRoute.js.map