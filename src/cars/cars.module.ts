import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from "./car.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([Car])

  ],
  providers: [CarsService],
  exports: [
    CarsService,

  ]
})
export class CarsModule {}
