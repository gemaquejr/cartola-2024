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
const Match_1 = __importDefault(require("../database/models/Match"));
class MatchService {
    constructor() {
        this.matchModel = Match_1.default;
        this.teamModel = Team_1.default;
    }
    getAllMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matches = yield this.matchModel.findAll({
                    include: [
                        { model: this.teamModel, as: 'teamHome', attributes: ['teamName'] },
                        { model: this.teamModel, as: 'teamAway', attributes: ['teamName'] },
                    ],
                    attributes: { exclude: ['homeTeam', 'awayTeam'] },
                });
                return matches;
            }
            catch (error) {
                throw new Error(`Error when searching for ${error}`);
            }
        });
    }
    createMatch(validMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { homeTeam, awayTeam } = validMatch;
                if (!homeTeam || !awayTeam) {
                    throw new Error('Invalid match data: Home team or away team missing');
                }
                const existingMatch = yield this.matchModel.findOne({
                    where: {
                        homeTeam,
                        awayTeam,
                    }
                });
                if (existingMatch) {
                    throw new Error('Match between home team and away team already exists');
                }
                const newMatch = yield this.matchModel.create(validMatch);
                return newMatch;
            }
            catch (error) {
                throw new Error(`Error when creating match: ${error}`);
            }
        });
    }
    getMatchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const match = yield this.matchModel.findByPk(id);
                return match;
            }
            catch (error) {
                throw new Error(`Error when searching for match: ${error}`);
            }
        });
    }
    updateMatch(id, matchData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matchToUpdate = yield this.matchModel.findByPk(id);
                if (!matchToUpdate) {
                    throw new Error('Match not found');
                }
                const updatedMatch = yield matchToUpdate.update(matchData);
                return updatedMatch;
            }
            catch (error) {
                throw new Error(`Error when updating match: ${error}`);
            }
        });
    }
    deleteMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const match = yield this.matchModel.findByPk(id);
                if (!match) {
                    throw new Error('Match not found');
                }
                yield match.destroy();
                return { message: 'Match deleted successfully' };
            }
            catch (error) {
                throw new Error(`Error when deleting match: ${error}`);
            }
        });
    }
}
exports.default = MatchService;
//# sourceMappingURL=matchService.js.map