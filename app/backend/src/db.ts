import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('CARTOLA_2024', 'root', '12345678', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;