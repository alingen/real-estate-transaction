import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';
import { GetRealEstateTransactionUseCase } from '../usecase/get-real-estate-transaction.usecase';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;
  let useCase: GetRealEstateTransactionUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
      providers: [
        {
          provide: GetRealEstateTransactionUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EstateTransactionController>(EstateTransactionController);
    useCase = module.get<GetRealEstateTransactionUseCase>(GetRealEstateTransactionUseCase);
  });

  // controller.getRealEstateTransaction メソッドが正しく呼び出される
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // 正しいクエリパラメーターで useCase.execute メソッドが呼び出される
  it('should call useCase.execute with the correct query parameters', async () => {
    const mockResponse = { result: 'some data' };
    jest.spyOn(useCase, 'execute').mockResolvedValue(mockResponse);

    const query = { year: 2020, prefCode: 13, cityCode: '13101', displayType: 1 };
    const result = await controller.getRealEstateTransaction(query);

    expect(result).toEqual(mockResponse);
    expect(useCase.execute).toHaveBeenCalledWith(query);
  });
});
