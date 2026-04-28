import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('validate')
  validateCard(@Body() body: { cardNumber?: string | number }) {
    if (body.cardNumber === undefined || body.cardNumber === null) {
      throw new BadRequestException('cardNumber is required');
    }
    const cardNumberStr = String(body.cardNumber);
    const isValid = this.appService.validateCardNumber(cardNumberStr);
    return { valid: isValid };
  }
}