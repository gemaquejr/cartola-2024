"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
const Team_1 = __importDefault(require("./Team"));
class Player extends sequelize_1.Model {
}
Player.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    punctuation: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    appreciation: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    teamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'team_id',
        references: {
            model: Team_1.default,
            key: 'id',
        },
    },
}, {
    underscored: true,
    sequelize: db_1.default,
    modelName: 'players',
    timestamps: false,
});
Player.belongsTo(Team_1.default, { foreignKey: 'teamId' });
exports.default = Player;
//# sourceMappingURL=Player.js.map