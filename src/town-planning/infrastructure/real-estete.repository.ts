import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RealEstateRepositoryInterface } from '../repository/real-estate.repository.interface';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RealEstateRepository implements RealEstateRepositoryInterface {
  private readonly resasApiUrl =
    'https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  // インターフェースで定義されたメソッドを実装
  async getTransactionData(
    prefCode: string,
    cityCode: string,
    year: string,
    displayType: string,
  ): Promise<any> {
    const apiKey = this.configService.get<string>('RESAS_API_KEY');

    try {
      // RESAS API に GET リクエストを送信
      const response = await firstValueFrom(
        this.httpService.get(this.resasApiUrl, {
          headers: { 'X-API-KEY': apiKey },
          params: { prefCode, cityCode, year, displayType },
        }),
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data from RESAS API:', error);
      throw error;
    }
  }
}
