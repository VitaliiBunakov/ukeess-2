import { Module } from '@nestjs/common';
import { LoadCarsOperationsController } from './load-cars-operations.controller';
import { LoadCarsOperationsService } from './load-cars-operations.service';

@Module({
  controllers: [LoadCarsOperationsController],
  providers: [LoadCarsOperationsService]
})
export class LoadCarsOperationsModule {}
