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
const playerService_1 = __importDefault(require("../services/playerService"));
const Team_1 = __importDefault(require("../database/models/Team"));
class PlayerController {
    constructor(playerService = new playerService_1.default()) {
        this.playerService = playerService;
    }
    getAllPlayers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const players = yield this.playerService.getAllPlayers();
                res.status(200).json(players);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for players' });
            }
        });
    }
    createPlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { position, name, punctuation, price, appreciation, teamId } = req.body;
            try {
                console.log('Dados recebidos no controller:', req.body);
                if (!name || !teamId) {
                    return res.status(400).json({ error: 'Name and team ID are mandatory' });
                }
                const teamExists = yield Team_1.default.findOne(teamId);
                if (!teamExists) {
                    return res.status(404).json({ error: 'Team not found' });
                }
                const playerData = {
                    position,
                    name,
                    punctuation,
                    price,
                    appreciation,
                    teamId,
                };
                const newPlayer = yield this.playerService.createPlayer(playerData);
                res.status(201).json({ newPlayer });
            }
            catch (error) {
                if (error.message === 'Player with this name already exists') {
                    return res.status(400).json({ error: error.message });
                }
                res.status(500).json({ error: 'Error when creating a new player' });
            }
        });
    }
    getPlayerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const player = yield this.playerService.getPlayerById(Number(id));
                if (!player) {
                    return res.status(404).json({ message: 'Player not found' });
                }
                res.status(200).json(player);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when searching for player by ID' });
            }
        });
    }
    updatePlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name } = req.body;
            try {
                const updated = yield this.playerService.updatePlayer(Number(id), { name });
                if (!updated) {
                    return res.status(404).json({ message: 'Player not update' });
                }
                return res.status(200).json(updated);
            }
            catch (error) {
                res.status(500).json({ error: 'Error when updating player' });
            }
        });
    }
    deletePlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const player = yield this.playerService.getPlayerById(Number(id));
                if (!player) {
                    return res.status(404).json({ message: 'Player not found' });
                }
                yield this.playerService.deletePlayer(Number(id));
                return res.status(204).json({ ok: true });
            }
            catch (error) {
                return res.status(500).json({ error: 'Error when deleting player' });
            }
        });
    }
}
exports.default = PlayerController;
//# sourceMappingURL=playerController.js.map