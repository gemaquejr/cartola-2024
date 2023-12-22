"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../db"));
const Team_1 = __importDefault(require("./Team"));
class Coach extends sequelize_1.Model {
}
Coach.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nacionality: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    teamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'team_id',
        references: {
            model: 'teams',
            key: 'id',
        },
    },
}, {
    underscored: true,
    sequelize: db_1.default,
    modelName: 'coaches',
    timestamps: false,
});
Coach.belongsTo(Team_1.default, { foreignKey: 'teamId' });
exports.default = Coach;
//# sourceMappingURL=Coach.js.map