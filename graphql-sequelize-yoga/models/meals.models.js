'use strict'

module.exports = (sequelize, Datatypes) => {
    const Meals = sequelize.define('Meals', {
        name: Datatypes.STRING
    }, {})

    Meals.associate = (models) => {
        Meals.belongsToMany(models.Foods, {
            through: models.MealsFoods
        })
    }
    return Meals
}