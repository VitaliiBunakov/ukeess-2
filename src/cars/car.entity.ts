import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("cars")
export class Car {



  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", width: 200 })
  vin: string;

  @Column({ type: "varchar", width: 200 })
  brand: string;

  @Column({ type: "varchar", width: 200 })
  model: string;

  @Column({ type: "int", width: 200 })
  make_year: number;

  @Column({ type: "varchar", width: 200 })
  color: string;

  @Column({ type: "varchar", width: 200 })
  kind: string;

  @Column({ type: "varchar", width: 200 })
  body: string;

  @Column({ type: "varchar", width: 200 })
  purpose: string;

  @Column({ type: "varchar", width: 200 })
  fuel: string;

  @Column({ type: "int", width: 200 })
  capacity: number;

  @Column({ type: "int", width: 200 })
  own_weight: number;

  @Column({ type: "int", width: 200 })
  total_weight: number;


}