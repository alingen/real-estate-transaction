import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { TownPlanningService } from '../service/town-planning.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Town Planning')
@Controller('api/v1/townPlanning/estateTransaction')
export class EstateTransactionController {
  constructor(private readonly townPlanningService: TownPlanningService) {}

  @Get('bar')
  @ApiQuery({ name: 'year', required: true, description: '2009 ~ 2021 の年度' })
  @ApiQuery({ name: 'prefCode', required: true, description: '都道府県コード (1 ~ 47)' })
  @ApiQuery({ name: 'cityCode', required: true, description: '市区町村コード' })
  @ApiQuery({ name: 'displayType', required: true, description: '表示種類 (1 ~ 5)' })
  async getRealEstateTransaction(
    @Query('year') year: string,
    @Query('prefCode') prefCode: string,
    @Query('cityCode') cityCode: string,
    @Query('displayType') displayType: string,
  ) {
    if (!year || !prefCode || !cityCode || !displayType) {
      throw new BadRequestException('Required query parameters are missing.');
    }

    return this.townPlanningService.getRealEstateData(prefCode, cityCode, year, displayType);
  }
}
