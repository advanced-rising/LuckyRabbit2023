import { IsNotEmpty, MaxLength } from 'class-validator';
import { PackColors } from '../pack-color.enum';

export class CreatePackDto {
  @IsNotEmpty()
  cost: number;

  @IsNotEmpty()
  color: PackColors;

  @IsNotEmpty()
  @MaxLength(200)
  comment: string;

  @IsNotEmpty()
  @MaxLength(20)
  someone: string;
}
