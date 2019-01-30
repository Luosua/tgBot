import { Module } from '@nestjs/common';
import { BotController } from '../controller/bot.controller';
import { BotService } from '../service/bot.service';

@Module({
  imports: [],
  controllers: [BotController],
  providers: [BotService],
})
export class BotModule {}
