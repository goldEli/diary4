import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PageDto } from '../common/dto/page.dto';

@ApiTags('diary')
@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post()
  @ApiOperation({ summary: '创建日记' })
  @ApiResponse({ status: 201, description: '创建成功' })
  create(@Body() createDiaryDto: CreateDiaryDto) {
    return this.diaryService.create(createDiaryDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有日记' })
  @ApiResponse({ status: 200, description: '获取成功' })
  findAll(@Query() pageDto: PageDto) {
    return this.diaryService.findAll(pageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定日记' })
  @ApiResponse({ status: 200, description: '获取成功' })
  findOne(@Param('id') id: string) {
    return this.diaryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新日记' })
  @ApiResponse({ status: 200, description: '更新成功' })
  update(@Param('id') id: string, @Body() updateDiaryDto: UpdateDiaryDto) {
    return this.diaryService.update(+id, updateDiaryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除日记' })
  @ApiResponse({ status: 200, description: '删除成功' })
  remove(@Param('id') id: string) {
    return this.diaryService.remove(+id);
  }
}
