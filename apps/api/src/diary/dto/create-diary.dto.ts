import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiaryDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}