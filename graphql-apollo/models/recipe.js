'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    direction: DataTypes.TEXT
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo(
      models.User, {
        foreignKey: 'userId'
    })
  };
  return Recipe;
};