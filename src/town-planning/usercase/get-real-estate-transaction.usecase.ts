import { Injectable } from '@nestjs/common';
import { TownPlanningService } from '../service/town-planning.service';
import { RealEstateQueryDto } from '../dto/real-estate-query.dto';

@Injectable()
export class GetRealEstateTransactionUseCase {
  constructor(private readonly townPlanningService: TownPlanningService) {}

  // UseCase のエントリーポイント
  async execute(query: RealEstateQueryDto): Promise<any> {
    // DTO から各パラメーターを取り出す
    const { year, prefCode, cityCode, displayType } = query;

    // Service 層を呼び出してデータを取得
    return await this.townPlanningService.getRealEstateData(
      prefCode.toString(),
      cityCode,
      year.toString(),
      displayType.toString(),
    );
  }
}
