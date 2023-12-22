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
const Player_1 = __importDefault(require("../database/models/Player"));
const Team_1 = __importDefault(require("../database/models/Team"));
class TeamService {
    constructor() {
        this.playerModel = Player_1.default;
    }
    getAllPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const players = yield this.playerModel.findAll({
                    include: { model: Team_1.default, attributes: ['teamName'] }
                });
                return players;
            }
            catch (error) {
                throw new Error(`Error when searching for ${error}`);
            }
        });
    }
    createPlayer(playerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, teamId } = playerData;
                const existingPlayer = yield this.playerModel.findOne({ where: { name, teamId } });
                if (existingPlayer) {
                    throw new Error('Player with this name already exists in this team');
                }
                const newPlayer = yield this.playerModel.create(playerData);
                return newPlayer;
            }
            catch (error) {
                throw new Error(`Error when creating player: ${error}`);
            }
        });
    }
    getPlayerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield this.playerModel.findByPk(id);
                return team;
            }
            catch (error) {
                throw new Error(`Error when searching for player: ${error}`);
            }
        });
    }
    updatePlayer(id, playerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerToUpdate = yield this.playerModel.findByPk(id);
                if (!playerToUpdate) {
                    throw new Error('Player not found');
                }
                const updatedPlayer = yield playerToUpdate.update(playerData);
                return updatedPlayer;
            }
            catch (error) {
                throw new Error(`Error when updating player: ${error}`);
            }
        });
    }
    deletePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const player = yield this.playerModel.findByPk(id);
                if (!player) {
                    throw new Error('Player not found');
                }
                yield player.destroy();
                return { message: 'Player deleted successfully' };
            }
            catch (error) {
                throw new Error(`Error when deleting player: ${error}`);
            }
        });
    }
}
exports.default = TeamService;
//# sourceMappingURL=playerService.js.map