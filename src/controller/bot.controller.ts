import { Controller, Res, Req, Post } from '@nestjs/common';
import { BotService } from '../service/bot.service';

@Controller()
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Post('sendmsg/:id')
  async sendMessage(@Res() res, @Req() req) {
    this.botService.route(res, req);
  }
}
