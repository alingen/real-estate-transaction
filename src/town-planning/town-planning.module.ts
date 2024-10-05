import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EstateTransactionController } from './controller/estate-transaction.controller';
import { TownPlanningService } from './service/town-planning.service';
import { GetRealEstateTransactionUseCase } from './usercase/get-real-estate-transaction.usecase';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [EstateTransactionController],
  providers: [TownPlanningService, GetRealEstateTransactionUseCase],
})
export class TownPlanningModule {}
