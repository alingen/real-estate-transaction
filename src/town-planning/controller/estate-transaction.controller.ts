import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { TownPlanningService } from '../service/town-planning.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { RealEstateQueryDto } from '../dto/real-estate-query.dto';

@ApiTags('Town Planning')
@Controller('api/v1/townPlanning/estateTransaction')
export class EstateTransactionController {
  constructor(private readonly townPlanningService: TownPlanningService) {}

  @Get('bar')
  async getRealEstateTransaction(@Query() query: RealEstateQueryDto) {
    return this.townPlanningService.getRealEstateData(
      query.prefCode.toString(),
      query.cityCode,
      query.year.toString(),
      query.displayType.toString(),
    );
  }
}
