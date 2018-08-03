'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      use_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      use_email: {
        type: Sequelize.STRING
      },
      use_name: {
        type: Sequelize.STRING
      },
      use_password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Cria a chave estrangeira (users belongs to teams)
      tea_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'tea_id'
        },
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};