import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LoadCarsOperationsService } from './load-cars-operations.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('load-cars-operations')
export class LoadCarsOperationsController {
  constructor(
    private readonly loadCarsOperationService: LoadCarsOperationsService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  loadCars(@UploadedFile() file: Express.Multer.File): any {
    return this.loadCarsOperationService.loadCars(file);
  }
}
