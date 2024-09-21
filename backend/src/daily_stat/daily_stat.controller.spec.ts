import { Test, TestingModule } from '@nestjs/testing';
import { DailyStatController } from './daily_stat.controller';
import { DailyStatService } from './daily_stat.service';

describe('DailyStatController', () => {
  let controller: DailyStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyStatController],
      providers: [DailyStatService],
    }).compile();

    controller = module.get<DailyStatController>(DailyStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
