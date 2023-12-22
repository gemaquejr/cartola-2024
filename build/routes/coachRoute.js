"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coachController_1 = __importDefault(require("../controllers/coachController"));
const coachRouter = (0, express_1.Router)();
const coachController = new coachController_1.default();
coachRouter.get('/', (req, res) => coachController.getAllCoaches(req, res));
coachRouter.post('/', (req, res) => coachController.createCoach(req, res));
coachRouter.get('/:id', (req, res) => coachController.getCoachById(req, res));
coachRouter.patch('/:id', (req, res) => coachController.updateCoach(req, res));
coachRouter.delete('/:id', (req, res) => coachController.deleteCoach(req, res));
exports.default = coachRouter;
//# sourceMappingURL=coachRoute.js.map