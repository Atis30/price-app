import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pricelist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  list_price: number;

  @Column()
  dollor_offset: number;

  @Column()
  net_price: number;

  @Column()
  harmony_cost: number;

  @Column()
  comments: string;
}
