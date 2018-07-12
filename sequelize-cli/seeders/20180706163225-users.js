'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      use_email: "user1@teste.com",
      use_name: "User 1",
      use_password: "123456",
      createdAt: new Date(),
      updatedAt: new Date(),
      tea_id: 1
    },{
      use_email: "user2@teste.com",
      use_name: "User 2",
      use_password: "123456",
      createdAt: new Date(),
      updatedAt: new Date(),
      tea_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Limpa a tabela inteira
    //return queryInterface.bulkDelete('users', null, {});
    // Limpa apenas o que foi importado
    return queryInterface.bulkDelete('users', {use_email: {[Sequelize.Op.in]: ['user1@teste.com', 'user2@teste.com']}}, {});
  }
};
