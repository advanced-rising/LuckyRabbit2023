import { Pack } from 'src/packs/pack.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Pack, (pack) => pack.userId)
  packs: Pack[];
}
