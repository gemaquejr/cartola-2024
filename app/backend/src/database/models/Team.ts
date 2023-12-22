import { DataTypes, Model } from 'sequelize';
import db from '../../db'

class Team extends Model {
    public id!: number;
    public teamName!: string;
    public stadiumName!: string;
    public teamLogo!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Team.init ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stadiumName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      teamLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
});

export default Team;