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
    public teamId!: number;
  
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
    teamId: {
        type: DataTypes.INTEGER,
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
    sequelize: db,
    modelName: 'players',
    timestamps: false,
});

Player.belongsTo(Team, { foreignKey: 'teamId' });

export default Player;