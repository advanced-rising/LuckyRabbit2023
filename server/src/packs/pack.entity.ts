import { User } from 'src/auth/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PackColors } from './pack-color.enum';

@Entity()
export class Pack {
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

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.packs)
  @JoinColumn({ name: 'userId' })
  user: User;
}
