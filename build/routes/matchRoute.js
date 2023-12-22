"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchController_1 = __importDefault(require("../controllers/matchController"));
const matchRouter = (0, express_1.Router)();
const matchController = new matchController_1.default();
matchRouter.get('/', (req, res) => matchController.getAllMatches(req, res));
matchRouter.post('/', (req, res) => matchController.createMatch(req, res));
matchRouter.get('/:id', (req, res) => matchController.getMatchById(req, res));
matchRouter.patch('/:id', (req, res) => matchController.updateMatch(req, res));
matchRouter.delete('/:id', (req, res) => matchController.deleteMatch(req, res));
exports.default = matchRouter;
//# sourceMappingURL=matchRoute.js.map