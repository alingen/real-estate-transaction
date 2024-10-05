import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EstateTransactionController } from './controller/estate-transaction.controller';
import { TownPlanningService } from './service/town-planning.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [EstateTransactionController],
  providers: [TownPlanningService],
})
export class TownPlanningModule {}
