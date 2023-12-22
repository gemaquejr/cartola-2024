"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coachService_1 = __importDefault(require("../services/coachService"));
const Team_1 = __importDefault(require("../database/models/Team"));
class CoachController {
    constructor(coachService = new coachService_1.default()) {
        this.coachService = coachService;
    }
    getAllCoaches(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coaches = yield this.coachService.getAllCoaches();
                res.status(200).json(coaches);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for coaches' });
            }
        });
    }
    createCoach(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, nacionality, age, teamId } = req.body;
            try {
                if (!name || !teamId) {
                    return res.status(400).json({ error: 'Name and team ID are mandatory' });
                }
                const teamExists = yield Team_1.default.findByPk(teamId);
                if (!teamExists) {
                    return res.status(404).json({ error: 'Team not found' });
                }
                const coachData = {
                    name,
                    nacionality,
                    age,
                    teamId,
                };
                const newCoach = yield this.coachService.createCoach(coachData);
                res.status(201).json({ newCoach });
            }
            catch (error) {
                if (error.message.includes('Coach with this name already exists in this team')) {
                    return res.status(400).json({ error: 'Coach with this name already exists in this team' });
                }
                res.status(500).json({ error: 'Error when creating a new coach' });
            }
        });
    }
    getCoachById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const coach = yield this.coachService.getCoachById(Number(id));
                if (!coach) {
                    return res.status(404).json({ message: 'Coach not found' });
                }
                res.status(200).json(coach);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for coach by ID' });
            }
        });
    }
    updateCoach(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const coachData = req.body;
            try {
                const updated = yield this.coachService.updateCoach(Number(id), coachData);
                if (!updated) {
                    return res.status(404).json({ message: 'Coach not update' });
                }
                return res.status(200).json(updated);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when updating coach' });
            }
        });
    }
    deleteCoach(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const coach = yield this.coachService.getCoachById(Number(id));
                if (!coach) {
                    return res.status(404).json({ message: 'Coach not found' });
                }
                yield this.coachService.deleteCoach(Number(id));
                return res.status(204).json({ ok: true });
            }
            catch (error) {
                return res.status(500).json({ error: 'Error when deleting coach' });
            }
        });
    }
}
exports.default = CoachController;
//# sourceMappingURL=coachController.js.map