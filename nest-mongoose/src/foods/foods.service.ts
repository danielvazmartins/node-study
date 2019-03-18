import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateFoodDto } from "./create-food.dto";

@Injectable()
export class FoodsService {

    constructor(
        @InjectModel('Food') private readonly foodModel: Model<any>
    ) {}

    async create(createFoodDto: CreateFoodDto) {
        const newFood = new this.foodModel(createFoodDto)
        return await this.foodModel.create(newFood)
    }

    async findAll() {
        return await this.foodModel.find().exec()
    }
}