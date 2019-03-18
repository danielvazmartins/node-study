import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './create-food.dto';

@Controller('foods')
export class FoodsController {

    constructor(
        private foodsService: FoodsService
    ) {}

    @Post()
    async create(@Body() createFoodDto: CreateFoodDto) {
        return this.foodsService.create(createFoodDto)
    }

    @Get()
    async getAll() {
        return this.foodsService.findAll()
    }
}
