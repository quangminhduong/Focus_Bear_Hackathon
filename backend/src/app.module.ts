import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { DailyStatModule } from './daily_stat/daily_stat.module';
import { DailyStat } from './daily_stat/entities/daily_stat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5437,
      password: 'postgres',
      username: 'postgres',
      entities: [User, DailyStat],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    DailyStatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
