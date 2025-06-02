import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PageDto {
  @ApiProperty({ description: '页码', default: 1, required: false })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ description: '每页数量', default: 10, required: false })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @Min(1)
  pageSize?: number = 10;
}