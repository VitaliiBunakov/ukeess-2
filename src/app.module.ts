import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadCarsOperationsModule } from './load-cars-operations/load-cars-operations.module';
import { CarsModule } from './cars/cars.module';
import { OperationsModule } from './operations/operations.module';

@Module({
  imports: [LoadCarsOperationsModule, CarsModule, OperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
