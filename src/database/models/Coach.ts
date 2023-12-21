import { DataTypes, Model } from 'sequelize';
import db from '../../db'

import Team from './Team';

class Coach extends Model {
    public id!: number;
    public name!: string;
    public nacionality!: string;
    public age!: number;
    public teamId!: number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Coach.init ({
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
    nacionality: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    age: {
        type: DataTypes.NUMBER,
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
    modelName: 'coaches',
    timestamps: false,
});

Coach.belongsTo(Team, { foreignKey: 'teamId' });

export default Coach;