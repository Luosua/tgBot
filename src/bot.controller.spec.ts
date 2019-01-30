import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { BotController } from './controller/bot.controller';
import { BotService } from './service/bot.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [BotController],
      providers: [BotService],
    }).compile();
  });

});
