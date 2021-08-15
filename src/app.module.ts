import { Module } from '@nestjs/common';
import { LoadCarsOperationsModule } from './load-cars-operations/load-cars-operations.module';
import { CarsModule } from './cars/cars.module';
import { OperationsModule } from './operations/operations.module';
import { Car } from './cars/car.entity';
import { LoadCarsOperationsService } from './load-cars-operations/load-cars-operations.service';
import { LoadCarsOperationsController } from './load-cars-operations/load-cars-operations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CarsModule,
    OperationsModule,
    LoadCarsOperationsModule,
    Car,
    ConfigModule.forRoot(),
  ],
  controllers: [LoadCarsOperationsController],
  providers: [LoadCarsOperationsService],
})
export class AppModule {}
