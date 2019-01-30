import { Injectable } from '@nestjs/common';
import { token, devId } from 'keys';

@Injectable()
export class BotService {
  route(res, req) {
    // let id = req.params.id;
    const TelegramBot = require('node-telegram-bot-api');
    const bot = new TelegramBot(token, {polling: true});
		bot.sendMessage(devId, `<b>${req.body.status}</b> \n${req.body.msg}`, { parse_mode: "HTML" });
		res.send('ok');
  }
}
