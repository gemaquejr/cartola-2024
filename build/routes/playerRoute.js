"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = __importDefault(require("../controllers/playerController"));
const playerRouter = (0, express_1.Router)();
const playerController = new playerController_1.default();
playerRouter.get('/', (req, res) => playerController.getAllPlayers(req, res));
playerRouter.post('/', (req, res) => playerController.createPlayer(req, res));
playerRouter.get('/:id', (req, res) => playerController.getPlayerById(req, res));
playerRouter.patch('/:id', (req, res) => playerController.updatePlayer(req, res));
playerRouter.delete('/:id', (req, res) => playerController.deletePlayer(req, res));
exports.default = playerRouter;
//# sourceMappingURL=playerRoute.js.map