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
class TeamService {
    constructor() {
        this.teamModel = Team_1.default;
    }
    getAllTeams() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teams = yield this.teamModel.findAll();
                return teams;
            }
            catch (error) {
                throw new Error(`Error when searching for ${error}`);
            }
        });
    }
    createTeam(teamName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTeam = yield this.teamModel.create({ teamName });
                return newTeam;
            }
            catch (error) {
                throw new Error(`Error when creating team: ${error}`);
            }
        });
    }
    getTeamById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield this.teamModel.findByPk(id);
                return team;
            }
            catch (error) {
                throw new Error(`Error when searching for team: ${error}`);
            }
        });
    }
    updateTeam(id, teamName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamToUpdate = yield this.teamModel.findByPk(id);
                if (!teamToUpdate) {
                    throw new Error('Team not found');
                }
                const updatedTeam = yield teamToUpdate.update(teamName);
                return updatedTeam;
            }
            catch (error) {
                throw new Error(`Error when updating team: ${error}`);
            }
        });
    }
    deleteTeam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield this.teamModel.findByPk(id);
                if (!team) {
                    throw new Error('Team not found');
                }
                yield team.destroy();
                return { message: 'Team deleted successfully' };
            }
            catch (error) {
                throw new Error(`Error when deleting team: ${error}`);
            }
        });
    }
}
exports.default = TeamService;
//# sourceMappingURL=teamService.js.map