import { Injectable } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageDto } from '../common/dto/page.dto';

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) {}

  create(createDiaryDto: CreateDiaryDto) {
    return this.prisma.diary.create({
      data: createDiaryDto,
    });
  }

  async findAll(pageDto: PageDto) {
    const { page = 1, pageSize = 10 } = pageDto;
    const skip = (page - 1) * pageSize;

    const [total, items] = await Promise.all([
      this.prisma.diary.count(),
      this.prisma.diary.findMany({
        skip,
        take: pageSize,
        orderBy: {
          date: 'desc',
        },
      }),
    ]);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  findOne(id: number) {
    return this.prisma.diary.findUnique({
      where: { id: String(id) },
    });
  }

  update(id: number, updateDiaryDto: UpdateDiaryDto) {
    return this.prisma.diary.update({
      where: { id: String(id) },
      data: updateDiaryDto,
    });
  }

  remove(id: number) {
    return this.prisma.diary.delete({
      where: { id: String(id) },
    });
  }
}
