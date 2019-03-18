import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-mongoose'),
    FoodsModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
