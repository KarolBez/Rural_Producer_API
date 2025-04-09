import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  cpfCnpj: string;

  @Column()
  name: string;

  @Column()
  farmName: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column('float')
  totalArea: number;

  @Column('float')
  agriculturalArea: number;

  @Column('float')
  vegetationArea: number;

  @Column("simple-array")
  crops: string[];
}