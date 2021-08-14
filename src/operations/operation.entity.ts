import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('operations')
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', width: 200 })
  person: string;

  @Column({ type: 'int', width: 10 })
  reg_addr_koatuu: number;

  @Column({ type: 'int', width: 200 })
  oper_code: number;

  @Column({ type: 'varchar', width: 200 })
  oper_name: string;

  @Column({ type: 'date', width: 200 })
  d_reg: string;

  @Column({ type: 'int', width: 200 })
  dep_code: number;

  @Column({ type: 'varchar', width: 200 })
  dep: string;

  @Column({ type: 'varchar', width: 200 })
  n_reg_new: string;
}
