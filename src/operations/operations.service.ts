import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "../cars/car.entity";
import { Connection, Repository } from "typeorm";
import { Operation } from "./operation.entity";

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private  operationRepository: Repository<Operation>,
    private connection: Connection
  ) {
  }

  async createOperation(operation) {
    let res;
    try {
      // console.log("*************creating Operation : ****************");
      // console.log(operation);
      res = await this.operationRepository.save(operation);
    } catch (err){
      console.log(err);
    }
    //make normal response
    return res;
  }
  //




}
