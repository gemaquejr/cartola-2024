import { DataTypes, Model } from 'sequelize';
import db from '../../db'

import Team from './Team';

class Player extends Model {
    public id!: number;
    public teamName!: string;
  
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
    name: {
        type: DataTypes.STRING,
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