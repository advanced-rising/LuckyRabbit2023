import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthSignInDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  password: string;
}
