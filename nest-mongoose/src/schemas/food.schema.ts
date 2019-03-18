import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
    name: String,
    carbs: Number,
    protein: Number,
    fat: Number
})