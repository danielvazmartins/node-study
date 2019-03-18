import { Controller, Get, Param } from '@nestjs/common';
import { Res1Service } from './res1.service';

@Controller('res1')
export class Res1Controller {

    constructor(private res1Service: Res1Service) {}

    @Get()
    getAll() {
        return {
            status: 'success',
            route: '/',
            data: this.res1Service.getAll()
        }
    }

    @Get('route1')
    getRoute() {
        return {
            status: 'success',
            route: '/route1'
        }
    }

    // Recebe um parâmetro na URL
    @Get(':id')
    getParam(@Param() params) {
        return {
            status: 'success',
            route: '/',
            param: params.id
        }
    }
}
