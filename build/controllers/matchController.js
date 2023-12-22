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
const matchService_1 = __importDefault(require("../services/matchService"));
class MatchController {
    constructor(matchService = new matchService_1.default()) {
        this.matchService = matchService;
    }
    getAllMatches(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matches = yield this.matchService.getAllMatches();
                res.status(200).json(matches);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for matches' });
            }
        });
    }
    createMatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const match = yield this.matchService.createMatch(req.body);
                return res.status(201).json(match);
            }
            catch (error) {
                return res.status(401).json({ message: error.message });
            }
        });
    }
    getMatchById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const match = yield this.matchService.getMatchById(Number(id));
                if (!match) {
                    return res.status(404).json({ message: 'Match not found' });
                }
                res.status(200).json(match);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for match by ID' });
            }
        });
    }
    updateMatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const matchData = req.body;
            try {
                const updated = yield this.matchService.updateMatch(Number(id), matchData);
                if (!updated) {
                    return res.status(404).json({ message: 'Match not update' });
                }
                return res.status(200).json(updated);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when updating match' });
            }
        });
    }
    deleteMatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const match = yield this.matchService.getMatchById(Number(id));
                if (!match) {
                    return res.status(404).json({ message: 'Match not found' });
                }
                yield this.matchService.deleteMatch(Number(id));
                return res.status(204).json({ ok: true });
            }
            catch (error) {
                return res.status(500).json({ error: 'Error when deleting match' });
            }
        });
    }
}
exports.default = MatchController;
//# sourceMappingURL=matchController.js.map