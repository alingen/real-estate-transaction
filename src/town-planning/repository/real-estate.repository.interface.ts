export interface RealEstateRepositoryInterface {
  getTransactionData(
    prefCode: string,
    cityCode: string,
    year: string,
    displayType: string,
  ): Promise<any>;
}
