'use strict';
let Teams = require('../models').teams;

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Busca os Teams para pegar seu id
    return Teams.findAll().then(function(teams) {
      // Percorre os Teams para inserir os usuarios (salva a promisse de retorno em uma variavel)
      let promiseMap = teams.map(function(team, index) {
        return queryInterface.bulkInsert('users', [{
            use_email: `user${(index * (index+1)) + 1}@teste.com`,
            use_name: `User ${(index * (index+1)) + 1}`,
            use_password: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
            tea_id: team.tea_id
          },{
            use_email: `user${(index * (index+1)) + 2}@teste.com`,
            use_name: `User ${(index * (index+1)) + 2}`,
            use_password: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
            tea_id: team.tea_id
          }])
        })
      // Executa todas promisses retornadas
      return Promise.all(promiseMap);
    })
  },

  down: (queryInterface, Sequelize) => {
    // Limpa a tabela inteira
    //return queryInterface.bulkDelete('users', null, {});
    // Limpa apenas o que foi importado
    return queryInterface.bulkDelete('users', {use_email: {[Sequelize.Op.in]: ['user1@teste.com', 'user2@teste.com', 'user3@teste.com', 'user4@teste.com']}}, {});
  }
};
