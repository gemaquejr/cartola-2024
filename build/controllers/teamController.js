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
const teamService_1 = __importDefault(require("../services/teamService"));
const Team_1 = __importDefault(require("../database/models/Team"));
class TeamController {
    constructor(teamService = new teamService_1.default()) {
        this.teamService = teamService;
    }
    getAllTeams(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teams = yield this.teamService.getAllTeams();
                res.status(200).json(teams);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for teams' });
            }
        });
    }
    createTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { teamName, stadiumName, teamLogo } = req.body;
            try {
                if (!teamName) {
                    return res.status(400).json({ error: 'Team name is mandatory' });
                }
                const existingTeam = yield Team_1.default.findOne({ where: { teamName } });
                if (existingTeam) {
                    throw new Error('Team with this name already exists');
                }
                const teamData = {
                    teamName,
                    stadiumName,
                    teamLogo,
                };
                const newTeam = yield this.teamService.createTeam(teamData);
                res.status(201).json(newTeam);
            }
            catch (error) {
                if (error.message === 'Team with this name already exists') {
                    return res.status(400).json({ error: error.message });
                }
                res.status(500).json({ error: 'Error when creating a new team' });
            }
        });
    }
    getTeamById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const team = yield this.teamService.getTeamById(Number(id));
                if (!team) {
                    return res.status(404).json({ message: 'Team not found' });
                }
                res.status(200).json(team);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for team by ID' });
            }
        });
    }
    updateTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const teamData = req.body;
            try {
                const updated = yield this.teamService.updateTeam(Number(id), teamData);
                if (!updated) {
                    return res.status(404).json({ message: 'Team not update' });
                }
                return res.status(200).json(updated);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when updating team' });
            }
        });
    }
    deleteTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const team = yield this.teamService.getTeamById(Number(id));
                if (!team) {
                    return res.status(404).json({ message: 'Team not found' });
                }
                yield this.teamService.deleteTeam(Number(id));
                return res.status(204).json({ ok: true });
            }
            catch (error) {
                return res.status(500).json({ error: 'Error when deleting team' });
            }
        });
    }
}
exports.default = TeamController;
//# sourceMappingURL=teamController.js.map