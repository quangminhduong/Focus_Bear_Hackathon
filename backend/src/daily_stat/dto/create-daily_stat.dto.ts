import { IsInt, IsDateString, IsNumber } from 'class-validator';

export class CreateDailyStatDto {
  @IsInt()
  user_id: number;

  @IsDateString()
  date: string;

  @IsNumber()
  morning_routine_completion_percentage: number;

  @IsNumber()
  evening_routine_completion_percentage: number;

  @IsNumber()
  minutes_in_focus_sessions: number;
}
