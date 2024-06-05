import { Module } from '@nestjs/common';
import { ZktecoController } from './zkteco.controller';
import { ZktecoService } from './zkteco.service';

@Module({
  imports: [],
  controllers: [ZktecoController],
  providers: [ZktecoService],
})
export class ZktecoModule {}