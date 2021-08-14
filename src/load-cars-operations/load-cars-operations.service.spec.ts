import { Test, TestingModule } from '@nestjs/testing';
import { LoadCarsOperationsService } from './load-cars-operations.service';

describe('LoadCarsOperationsService', () => {
  let service: LoadCarsOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadCarsOperationsService],
    }).compile();

    service = module.get<LoadCarsOperationsService>(LoadCarsOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
