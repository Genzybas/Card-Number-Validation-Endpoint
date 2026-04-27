import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateCardNumber', () => {
    it('should return true for valid card number', () => {
      expect(service.validateCardNumber('4532015112830366')).toBe(true);
    });

    it('should return false for invalid card number', () => {
      expect(service.validateCardNumber('4532015112830367')).toBe(false);
    });

    it('should return false for non-numeric input', () => {
      expect(service.validateCardNumber('abc')).toBe(false);
    });

    it('should handle spaces and dashes', () => {
      expect(service.validateCardNumber('4532 0151 1283 0366')).toBe(true);
      expect(service.validateCardNumber('4532-0151-1283-0366')).toBe(true);
    });
  });
});