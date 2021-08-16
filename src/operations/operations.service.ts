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
    return await this.operationRepository.save(operation);
  }
}
