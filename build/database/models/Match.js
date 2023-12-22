"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
const Team_1 = __importDefault(require("./Team"));
class Match extends sequelize_1.Model {
}
Match.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    homeTeam: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'teams',
            key: 'id',
        },
    },
    homeTeamGoals: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    awayTeam: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teams',
            key: 'id',
        },
    },
    awayTeamGoals: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    inProgress: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: db_1.default,
    modelName: 'matches',
    timestamps: false,
});
Match.belongsTo(Team_1.default, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team_1.default, { foreignKey: 'awayTeam', as: 'teamAway' });
exports.default = Match;
//# sourceMappingURL=Match.js.map