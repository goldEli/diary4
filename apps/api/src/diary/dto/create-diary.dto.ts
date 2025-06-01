import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDiaryDto {
  @ApiProperty({
    description: '日记内容',
    example: '今天是个好天气...',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    description: '日记日期',
    example: '2025-06-01',
  })
  @IsNotEmpty()
  @IsString()
  date: string;
}