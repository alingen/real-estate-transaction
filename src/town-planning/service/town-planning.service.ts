import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TownPlanningService {
  private readonly resasApiUrl =
    'https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getRealEstateData(
    prefCode: string,
    cityCode: string,
    year: string,
    displayType: string,
  ): Promise<any> {
    const apiKey = this.configService.get<string>('RESAS_API_KEY');
    const params = { prefCode, cityCode, year, displayType };

    try {
      const response = await firstValueFrom(
        this.httpService.get(this.resasApiUrl, {
          headers: { 'X-API-KEY': apiKey },
          params,
        }),
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data from RESAS API:', error);
      throw error;
    }
  }
}
