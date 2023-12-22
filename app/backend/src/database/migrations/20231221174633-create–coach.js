'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coaches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nacionality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'team_id',
      },
    });  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('coaches');
  }
};