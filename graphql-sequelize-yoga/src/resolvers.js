'use strict'
const FoodService = require('./services/foods.service')
const AdminService = require('./services/admin.service')
const MealsService = require('./services/meals.service')

const foodService = new FoodService()
const adminService = new AdminService()
const mealsService = new MealsService()

const resolvers = {
    Query: {
        getFoods: async () => {
            return await foodService.getAll()
        },
        getMeals: async () => {
            return await mealsService.getAll()
        }
    },

    Mutation: {
        adminInitDb: async () => {
            return await adminService.initDb().then(() => {
                return 'OK'
            })
        },
        addFood: async (_, { name, ptn, cho, lip }) => {
            return await foodService.create(name, ptn, cho, lip)
        },
        addMeal: async (_, { name }) => {
            return await mealsService.create(name)
        },
        addFoodToMeal: async (_, { MealId, FoodId, qtd }) => {
            return await mealsService.addFood(MealId, FoodId, qtd)
            .then(result => {
                return 'OK'
            })
        }
    }
}

module.exports = resolvers