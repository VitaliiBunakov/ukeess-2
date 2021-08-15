import { Injectable } from '@nestjs/common';
import { OperationsService } from '../operations/operations.service';
import { CarsService } from '../cars/cars.service';
const streamifier = require('streamifier');
import { parse } from 'csv';

@Injectable()
export class LoadCarsOperationsService {
  constructor(
    private readonly carsService: CarsService,
    readonly operationsService: OperationsService,
  ) {}

  loadCars(file): string {
    streamifier
      .createReadStream(file.buffer)
      .pipe(parse({ delimiter: ';', columns: true }))
      //on each csv line do ...
      .on('data', async (csvrow) => {
        const tmpObj = {};
        //if had empty field - return null instead of empty string
        for (const [key] of Object.entries(csvrow)) {
          if (csvrow[key] === '') {
            tmpObj[key.toLowerCase()] = null;
          } else {
            tmpObj[key.toLowerCase()] = csvrow[key];
          }
        }
        // @ts-ignore
        const vin = tmpObj.vin;
        if (vin) {
          const check = await this.carsService.find(vin);

          if (!check.length) {
            await this.carsService.createCar(tmpObj);
            await this.operationsService.createOperation(tmpObj);
          } else {
            await this.operationsService.createOperation(tmpObj);
          }
        } else {
          await this.operationsService.createOperation(tmpObj);
        }
      });

    return `File in progress`;
  }
}
