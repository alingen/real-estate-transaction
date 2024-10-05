import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EstateTransactionController } from './controller/estate-transaction.controller';
import { TownPlanningService } from './service/town-planning.service';
import { GetRealEstateTransactionUseCase } from './usecase/get-real-estate-transaction.usecase';
import { RealEstateRepository } from './infrastructure/real-estete.repository';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [EstateTransactionController],
  providers: [
    TownPlanningService,
    GetRealEstateTransactionUseCase,
    RealEstateRepository,
    { provide: 'RealEstateRepositoryInterface', useClass: RealEstateRepository },
  ],
})
export class TownPlanningModule {}
