import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operation } from './operation.entity';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private operationRepository: Repository<Operation>,
  ) {}

  async createOperation(operation) {
    let res;
    try {
      res = await this.operationRepository.save(operation);
    } catch (err) {
      console.log(err);
    }
    return res;
  }
}
