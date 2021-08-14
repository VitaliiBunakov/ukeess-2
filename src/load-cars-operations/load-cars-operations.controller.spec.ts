import { Test, TestingModule } from '@nestjs/testing';
import { LoadCarsOperationsController } from './load-cars-operations.controller';

describe('LoadCarsOperationsController', () => {
  let controller: LoadCarsOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoadCarsOperationsController],
    }).compile();

    controller = module.get<LoadCarsOperationsController>(LoadCarsOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
