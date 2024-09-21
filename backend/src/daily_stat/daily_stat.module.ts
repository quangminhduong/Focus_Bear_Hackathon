import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyStat } from './entities/daily_stat.entity';
import { DailyStatService } from './daily_stat.service';
import { DailyStatController } from './daily_stat.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DailyStat]), // Register DailyStat entity
  ],
  controllers: [DailyStatController],
  providers: [DailyStatService],
})
export class DailyStatModule {}
