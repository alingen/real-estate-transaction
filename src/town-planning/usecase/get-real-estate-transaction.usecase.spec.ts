import { Test, TestingModule } from '@nestjs/testing';
import { GetRealEstateTransactionUseCase } from './get-real-estate-transaction.usecase';
import { RealEstateRepositoryInterface } from '../repository/real-estate.repository.interface';

describe('GetRealEstateTransactionUseCase', () => {
  let useCase: GetRealEstateTransactionUseCase;
  let repository: RealEstateRepositoryInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetRealEstateTransactionUseCase,
        {
          provide: 'RealEstateRepositoryInterface',
          useValue: {
            getTransactionData: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<GetRealEstateTransactionUseCase>(GetRealEstateTransactionUseCase);
    repository = module.get<RealEstateRepositoryInterface>('RealEstateRepositoryInterface');
  });

  // useCase.execute メソッドが正しく呼び出される
  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  // 正しいパラメーターでリポジトリが呼び出される
  it('should call repository with the correct parameters', async () => {
    const mockResponse = { result: 'some data' };
    jest.spyOn(repository, 'getTransactionData').mockResolvedValue(mockResponse);

    const query = { year: 2020, prefCode: 13, cityCode: '13101', displayType: 1 };
    const result = await useCase.execute(query);

    expect(result).toEqual(mockResponse);
    expect(repository.getTransactionData).toHaveBeenCalledWith('13', '13101', '2020', '1');
  });
});
