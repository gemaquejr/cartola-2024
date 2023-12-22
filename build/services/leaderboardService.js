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
const Match_1 = __importDefault(require("../database/models/Match"));
const Team_1 = __importDefault(require("../database/models/Team"));
class LeaderboardService {
    constructor() {
        this.matchModel = Match_1.default;
        this.teamModel = Team_1.default;
    }
    totalPoints(teamId, matches) {
        const victory = this.victories(teamId, matches);
        const draw = this.draws(teamId, matches);
        const total = (victory * 3) + draw;
        return total;
    }
    totalGames(teamId, matches) {
        let allGames = 0;
        matches.forEach(({ homeTeam, awayTeam }) => {
            if ((homeTeam === teamId) || (awayTeam === teamId))
                allGames += 1;
        });
        return allGames;
    }
    victories(teamId, matches) {
        let Allvictories = 0;
        matches.forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }) => {
            if ((teamId === awayTeam) && (homeTeamGoals < awayTeamGoals))
                Allvictories += 1;
            if ((teamId === homeTeam) && (homeTeamGoals > awayTeamGoals))
                Allvictories += 1;
        });
        return Allvictories;
    }
    draws(teamId, matches) {
        let Alldraws = 0;
        matches.forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }) => {
            if ((teamId === awayTeam) && (homeTeamGoals === awayTeamGoals))
                Alldraws += 1;
            if ((teamId === homeTeam) && (homeTeamGoals === awayTeamGoals))
                Alldraws += 1;
        });
        return Alldraws;
    }
    losses(teamId, matches) {
        let losses = 0;
        matches.forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }) => {
            if ((teamId === awayTeam) && (homeTeamGoals > awayTeamGoals))
                losses += 1;
            if ((teamId === homeTeam) && (homeTeamGoals < awayTeamGoals))
                losses += 1;
        });
        return losses;
    }
    goalsFavor(teamId, matches) {
        let allGoalsFavor = 0;
        matches.forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }) => {
            if (teamId === awayTeam)
                allGoalsFavor += awayTeamGoals;
            if (teamId === homeTeam)
                allGoalsFavor += homeTeamGoals;
        });
        return allGoalsFavor;
    }
    goalsOwn(teamId, matches) {
        let allGoalsOwn = 0;
        matches.forEach(({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }) => {
            if (teamId === awayTeam)
                allGoalsOwn += homeTeamGoals;
            if (teamId === homeTeam)
                allGoalsOwn += awayTeamGoals;
        });
        return allGoalsOwn;
    }
    goalsBalance(teamId, matches) {
        const gf = this.goalsFavor(teamId, matches);
        const go = this.goalsOwn(teamId, matches);
        const total = gf - go;
        return total;
    }
    efficiency(teamId, matches) {
        const points = this.totalPoints(teamId, matches);
        const games = this.totalGames(teamId, matches);
        const efc = ((points / (games * 3)) * 100).toFixed(2);
        return efc.toString();
    }
    getLeaderboard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const finishedMatches = yield this.matchModel.findAll({ where: { inProgress: false } });
                const allTeams = yield this.teamModel.findAll();
                const ultimateLeaderboard = allTeams.map((team) => {
                    return {
                        name: team.teamName,
                        totalPoints: this.totalPoints(team.id, finishedMatches),
                        totalGames: this.totalGames(team.id, finishedMatches),
                        totalVictories: this.victories(team.id, finishedMatches),
                        totalDraws: this.draws(team.id, finishedMatches),
                        totalLosses: this.losses(team.id, finishedMatches),
                        goalsFavor: this.goalsFavor(team.id, finishedMatches),
                        goalsOwn: this.goalsOwn(team.id, finishedMatches),
                        goalsBalance: this.goalsBalance(team.id, finishedMatches),
                        efficiency: this.efficiency(team.id, finishedMatches),
                    };
                });
                return ultimateLeaderboard.sort((first, second) => second.totalPoints - first.totalPoints
                    || second.totalVictories - first.totalVictories
                    || second.goalsBalance - first.goalsBalance
                    || second.goalsFavor - first.goalsFavor
                    || second.goalsOwn - first.goalsOwn);
            }
            catch (error) {
                throw new Error(`Error when searching for ${error}`);
            }
        });
    }
}
exports.default = LeaderboardService;
//# sourceMappingURL=leaderboardService.js.map