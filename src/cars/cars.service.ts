import { Injectable } from '@nestjs/common';
import { Car } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  async find(vin) {
    return await this.carsRepository.find({ where: { vin: vin } });
  }

  async createCar(car) {
    return await this.carsRepository.save(car);
  }
}
