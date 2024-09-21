import { Controller, Post, Body } from '@nestjs/common';
import { DailyStatService } from './daily_stat.service';
import { CreateDailyStatDto } from './dto/create-daily_stat.dto';

@Controller('daily-stats')
export class DailyStatController {
  constructor(private readonly dailyStatService: DailyStatService) {}

  @Post()
  async create(@Body() createDailyStatDto: CreateDailyStatDto) {
    return await this.dailyStatService.create(createDailyStatDto);
  }
}
