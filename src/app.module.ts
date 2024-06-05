import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZktecoService } from './zkteco/zkteco.service';
import { ZktecoController } from './zkteco/zkteco.controller';
import { ZktecoModule } from './zkteco/zkteco.module';

@Module({
  imports: [ZktecoModule],
  controllers: [AppController, ZktecoController],
  providers: [AppService, ZktecoService],
})
export class AppModule {}
