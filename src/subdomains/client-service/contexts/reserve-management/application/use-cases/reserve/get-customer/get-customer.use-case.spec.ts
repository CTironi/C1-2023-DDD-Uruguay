import { Test, TestingModule } from '@nestjs/testing';
import { GetCustomerUseCase } from './get-customer.use-case';
import { CustomerDomainEntity, ICustomerDomainService, IReserveDomainService } from '../../../../domain';

describe('GetCustomerUseCase', () => {
    let customerService: IReserveDomainService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [GetCustomerUseCase],
      }).compile();
  
      customerService = module.get<GetCustomerUseCase>(GetCustomerUseCase);
    });
  
    it('should be defined', () => {
      expect(customerService).toBeDefined();
    });

    it('get customer', async () => {
      expect(await customerService.
    });
  
  });