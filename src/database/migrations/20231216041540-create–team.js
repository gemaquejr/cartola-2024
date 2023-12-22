'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
      team_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_name',
       },
      stadium_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'stadium_name',
       },
       team_Logo_URL: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_logo_url',
       },
    });  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};