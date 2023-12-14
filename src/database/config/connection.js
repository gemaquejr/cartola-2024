const { Sequelize } = require('sequelize');

const config = {
  username: 'root',
  password: '123456',
  database: 'CARTOLA_2024',
  host: 'localhost',
  port: 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  logging: config.logging,
});

module.exports = sequelize;