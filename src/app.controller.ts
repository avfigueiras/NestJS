import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(201)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id') 
  findBook(@Param('id') id: string) { 
    return this.appService.findAll(id); 
  }
}