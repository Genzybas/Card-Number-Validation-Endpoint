import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('validate')
  validateCard(@Body() body: { cardNumber?: string }) {
    if (!body.cardNumber) {
      throw new BadRequestException('cardNumber is required');
    }
    const isValid = this.appService.validateCardNumber(body.cardNumber);
    return { valid: isValid };
  }
}

@Post('validate')
  validateCard(@Body() body: { cardNumber?: string }) {
    if (!body.cardNumber) {
      throw new BadRequestException('cardNumber is required');
    }
    const isValid = this.appService.validateCardNumber(body.cardNumber);
    return { valid: isValid };
  }
}