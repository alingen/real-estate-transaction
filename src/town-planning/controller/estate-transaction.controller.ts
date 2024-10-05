import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { GetRealEstateTransactionUseCase } from '../usercase/get-real-estate-transaction.usecase';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { RealEstateQueryDto } from '../dto/real-estate-query.dto';

@ApiTags('Town Planning')
@Controller('api/v1/townPlanning/estateTransaction')
export class EstateTransactionController {
  constructor(private readonly getRealEstateTransactionUseCase: GetRealEstateTransactionUseCase) {}

  @Get('bar')
  async getRealEstateTransaction(@Query() query: RealEstateQueryDto) {
    return this.getRealEstateTransactionUseCase.execute(query);
  }
}
