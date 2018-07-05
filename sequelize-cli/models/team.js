'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    tea_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tea_name: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};