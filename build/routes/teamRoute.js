"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = __importDefault(require("../controllers/teamController"));
const teamRouter = (0, express_1.Router)();
teamRouter.get('/', (req, res) => teamController_1.default.getAllTeams(req, res));
teamRouter.post('/', (req, res) => teamController_1.default.createTeam(req, res));
teamRouter.get('/:id', (req, res) => teamController_1.default.getTeamById(req, res));
teamRouter.patch('/:id', (req, res) => teamController_1.default.updateTeam(req, res));
teamRouter.delete('/:id', (req, res) => teamController_1.default.deleteTeam(req, res));
exports.default = teamRouter;
//# sourceMappingURL=teamRoute.js.map