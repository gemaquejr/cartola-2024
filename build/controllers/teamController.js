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
const Team_1 = __importDefault(require("../database/models/Team"));
const TeamController = {
    getAllTeams(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teams = yield Team_1.default.findAll();
                res.status(200).json(teams);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for teams' });
            }
        });
    },
    createTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { teamName } = req.body;
            try {
                if (!teamName) {
                    return res.status(400).json({ error: 'Team name is mandatory' });
                }
                const newTeam = yield Team_1.default.create({ teamName });
                res.status(201).json(newTeam);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error when creating a new team' });
            }
        });
    },
    getTeamById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const team = yield Team_1.default.findByPk(id);
                if (!team) {
                    return res.status(404).json({ message: 'Team not found' });
                }
                res.status(200).json(team);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for team by ID' });
            }
        });
    },
    updateTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { teamName } = req.body;
            try {
                const [updated] = yield Team_1.default.update({ teamName }, { where: { id } });
                if (updated === 0) {
                    return res.status(404).json({ message: 'Team not found' });
                }
                const teamUpdated = yield Team_1.default.findByPk(id);
                res.status(200).json(teamUpdated);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when updating team' });
            }
        });
    },
    deleteTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deleted = yield Team_1.default.destroy({ where: { id } });
                if (deleted === 0) {
                    return res.status(404).json({ message: 'Team not found' });
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: 'Error when deleting team' });
            }
        });
    },
};
exports.default = TeamController;
//# sourceMappingURL=teamController.js.map