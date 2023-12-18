import { DataTypes, Model } from 'sequelize';
import db from '../../db'

import Team from './Team';

class Player extends Model {
    public id!: number;
    public position!: string;
    public name!: string;
    public punctuation!: number;
    public price!: number;
    public appreciation!: number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Player.init ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    punctuation: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    appreciation: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'player',
    timestamps: false,
});

Player.belongsTo(Team, { foreignKey: 'teamId' });

export default Player;