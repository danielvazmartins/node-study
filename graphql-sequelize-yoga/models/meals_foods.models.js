'use strict'

module.exports = (sequelize, DataTypes) => {
    const MealsFoods = sequelize.define('MealsFoods', {
        qtd: DataTypes.INTEGER
    })

    MealsFoods.associate = (models) => {
        
    }

    return MealsFoods
}