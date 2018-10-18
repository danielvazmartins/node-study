import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Res1Controller } from './res1/res1.controller';
import { Res1Service } from 'res1/res1.service';

@Module({
    imports: [],
    controllers: [
        AppController, 
        Res1Controller
    ],
    providers: [
        AppService,
        Res1Service
    ]
})
export class AppModule {}
