import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyStat } from './entities/daily_stat.entity';
import { CreateDailyStatDto } from './dto/create-daily_stat.dto';

@Injectable()
export class DailyStatService {
  constructor(
    @InjectRepository(DailyStat)
    private dailyStatRepository: Repository<DailyStat>,
  ) {}

  async create(createDailyStatDto: CreateDailyStatDto): Promise<DailyStat> {
    const dailyStat = this.dailyStatRepository.create(createDailyStatDto);
    return await this.dailyStatRepository.save(dailyStat);
  }
}
