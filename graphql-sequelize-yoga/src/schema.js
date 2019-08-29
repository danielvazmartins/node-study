'use strict'

const typeDefs = `
    type Meal {
        id: ID!
        name: String!
        Foods: [Food!]
    }

    type Food {
        id: ID!
        name: String!
        ptn: Float!
        cho: Float!
        lip: Float!
    }

    type Query {
        getFoods: [Food!]
        getMeals: [Meal!]
    }

    type Mutation {
        adminInitDb: String!
        addFood(name: String!, ptn: Float!, cho: Float!, lip: Float!): Food!
        addMeal(name: String!): Meal!
        addFoodToMeal(MealId: ID!, FoodId: ID!, qtd: Float!): String!
    }
`

module.exports = typeDefs