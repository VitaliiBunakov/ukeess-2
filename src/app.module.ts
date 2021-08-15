import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadCarsOperationsModule } from './load-cars-operations/load-cars-operations.module';
import { CarsModule } from './cars/cars.module';
import { OperationsModule } from './operations/operations.module';
import { Car } from './cars/car.entity';
import { LoadCarsOperationsService } from './load-cars-operations/load-cars-operations.service';
import { LoadCarsOperationsController } from './load-cars-operations/load-cars-operations.controller';
import { Operation } from './operations/operation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CarsModule,
    OperationsModule,
    LoadCarsOperationsModule,
    Car,
  ],
  controllers: [AppController, LoadCarsOperationsController],
  providers: [AppService, LoadCarsOperationsService],
})
export class AppModule {}
