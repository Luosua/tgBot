import { Module } from '@nestjs/common';
import { BotModule } from './module/bot.module';

@Module({
  imports: [BotModule]
})
export class AppModule {}
