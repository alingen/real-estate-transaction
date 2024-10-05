import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TownPlanningModule } from './town-planning/town-planning.module';

@Module({
  imports: [ConfigModule.forRoot(), TownPlanningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
