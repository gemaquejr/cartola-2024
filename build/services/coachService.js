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
const Coach_1 = __importDefault(require("../database/models/Coach"));
const Team_1 = __importDefault(require("../database/models/Team"));
class CoachService {
    constructor() {
        this.coachModel = Coach_1.default;
    }
    getAllCoaches() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coaches = yield this.coachModel.findAll({
                    include: { model: Team_1.default, attributes: ['teamName'] }
                });
                return coaches;
            }
            catch (error) {
                throw new Error(`Error when searching for ${error}`);
            }
        });
    }
    createCoach(coachData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, teamId } = coachData;
                const existingCoach = yield this.coachModel.findOne({ where: { name, teamId } });
                if (existingCoach) {
                    throw new Error('Coach with this name already exists in this team');
                }
                const newCoach = yield this.coachModel.create(coachData);
                return newCoach;
            }
            catch (error) {
                throw new Error(`Error when creating coach: ${error}`);
            }
        });
    }
    getCoachById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield this.coachModel.findByPk(id);
                return team;
            }
            catch (error) {
                throw new Error(`Error when searching for coach: ${error}`);
            }
        });
    }
    updateCoach(id, coachData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coachToUpdate = yield this.coachModel.findByPk(id);
                if (!coachToUpdate) {
                    throw new Error('Coach not found');
                }
                const updatedCoach = yield coachToUpdate.update(coachData);
                return updatedCoach;
            }
            catch (error) {
                throw new Error(`Error when updating coach: ${error}`);
            }
        });
    }
    deleteCoach(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coach = yield this.coachModel.findByPk(id);
                if (!coach) {
                    throw new Error('Coach not found');
                }
                yield coach.destroy();
                return { message: 'Coach deleted successfully' };
            }
            catch (error) {
                throw new Error(`Error when deleting coach: ${error}`);
            }
        });
    }
}
exports.default = CoachService;
//# sourceMappingURL=coachService.js.map