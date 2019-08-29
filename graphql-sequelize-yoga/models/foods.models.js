'use strict'

module.exports = (sequelize, DataTypes) => {
    const Foods = sequelize.define('Foods', {
        name: DataTypes.STRING,
        ptn: DataTypes.INTEGER,
        cho: DataTypes.INTEGER,
        lip: DataTypes.INTEGER
    }, {})

    Foods.associate = (models) => {
        Foods.belongsToMany(models.Meals, {
            through: models.MealsFoods
        })
    }
    return Foods
}