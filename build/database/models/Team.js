"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
class Team extends sequelize_1.Model {
}
Team.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    teamName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    stadiumName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    teamLogo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    underscored: true,
    sequelize: db_1.default,
    modelName: 'teams',
    timestamps: false,
});
exports.default = Team;
//# sourceMappingURL=Team.js.map