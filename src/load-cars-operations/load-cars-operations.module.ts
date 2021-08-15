import { Module } from '@nestjs/common';
import { LoadCarsOperationsController } from './load-cars-operations.controller';
import { LoadCarsOperationsService } from './load-cars-operations.service';
import { CarsModule } from '../cars/cars.module';
import { OperationsModule } from '../operations/operations.module';

@Module({
  imports: [OperationsModule, CarsModule],
  controllers: [LoadCarsOperationsController],
  providers: [LoadCarsOperationsService],
})
export class LoadCarsOperationsModule {}
