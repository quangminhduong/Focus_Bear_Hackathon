import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyStatDto } from './create-daily_stat.dto';

export class UpdateDailyStatDto extends PartialType(CreateDailyStatDto) {}
