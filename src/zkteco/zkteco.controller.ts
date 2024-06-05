import { Controller, Get } from '@nestjs/common';
import { ZktecoService } from './zkteco.service';

@Controller('zkteco')
export class ZktecoController {
  constructor(private readonly zktecoService: ZktecoService) {}

  @Get('data')
  async getData() {
    return this.zktecoService.getData();
  }
}