import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World los saluda Arlenys!';
  }

  findAll(id: string):string{
      return `el id es:+ ${id} `;
  }
}
