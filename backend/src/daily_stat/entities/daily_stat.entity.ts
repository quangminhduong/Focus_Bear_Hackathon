import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('daily_stats') // The table name in the database
export class DailyStat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  date: Date;

  @Column('float')
  morning_routine_completion_percentage: number;

  @Column('float')
  evening_routine_completion_percentage: number;

  @Column('int')
  minutes_in_focus_sessions: number;
}
