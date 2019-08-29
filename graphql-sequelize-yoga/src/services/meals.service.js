'use strict'
const db = require('../../models')

class MealsService {
    getAll() {
        return db.Meals.findAll({
            include: [
                { model: db.Foods }
            ]
        })
        .then(result => {
            console.log(JSON.stringify(result))
            return result
        })
    }

    create(name) {
        return db.Meals.create({name})
    }

    addFood(MealId, FoodId, qtd) {
        return db.MealsFoods.create({MealId, FoodId, qtd})
    }
}

module.exports = MealsService