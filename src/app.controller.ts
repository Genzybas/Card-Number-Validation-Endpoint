import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome() {
    return {
      message: "Credit Card Validator API is Live!",
      usage: "Send a POST request to /validate with a cardNumber",
      example: { cardNumber: "4532015112830366" }
    };
  }

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