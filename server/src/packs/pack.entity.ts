import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PackColors } from './pack-color.enum';

@Entity()
export class Pack {
  save() {
    throw new Error('Method not implemented');
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  color: PackColors;

  @Column()
  cost: number;

  @Column()
  someone: string;

  @Column()
  comment: string;

  @Column()
  isRead: 0 | 1;
}
