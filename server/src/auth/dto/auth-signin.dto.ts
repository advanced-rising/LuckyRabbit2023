import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthSignInDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(8)
  password: string;
}
