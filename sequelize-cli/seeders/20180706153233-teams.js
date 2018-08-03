'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', [{
      tea_name: "Equipe 1",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tea_name: "Equipe 2",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Limpa a tabela inteira
    //return queryInterface.bulkDelete('team', null, {});
    // Limpa apenas o que foi importado
    return queryInterface.bulkDelete('teams', {tea_name:{[Sequelize.Op.in]: ['Equipe 1', 'Equipe 2']}}, {});
  }
};
