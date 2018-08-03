'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('teams', {
    tea_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tea_name: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // Relacionamento 1 para N (team has many users)
    // Obs.: Verificar se é necessário o hasMany (apenas deixando o belongsTo na tabela users funcionou)
    team.hasMany(models.users, {
      foreignKey: {
        field: 'tea_id'
      }
    });
  };
  return team;
};