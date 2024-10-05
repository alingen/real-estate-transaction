import { Injectable, Inject } from '@nestjs/common';
import { RealEstateRepositoryInterface } from '../repository/real-estate.repository.interface';
import { RealEstateQueryDto } from '../dto/real-estate-query.dto';

@Injectable()
export class GetRealEstateTransactionUseCase {
  constructor(
    @Inject('RealEstateRepositoryInterface')
    private readonly realEstateRepository: RealEstateRepositoryInterface,
  ) {}

  // UseCase のエントリーポイント
  async execute(query: RealEstateQueryDto): Promise<any> {
    // DTO から各パラメーターを取り出す
    const { year, prefCode, cityCode, displayType } = query;

    // Service 層を呼び出してデータを取得
    return await this.realEstateRepository.getTransactionData(
      prefCode.toString(),
      cityCode,
      year.toString(),
      displayType.toString(),
    );
  }
}
