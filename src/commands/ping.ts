import BaseCommand from "../abstracts/BaseCommand";
import Bot from "../bot";
import { ImageURLOptions, Message } from "discord.js";

export default class PingCommand extends BaseCommand {
  constructor() {
    super("ping", "misc", [], true, "Pingを確認します。", "");
  }

  async execute(bot: Bot, message: Message, args: string[]): Promise<void> {
    message.channel.send(`Ping値は${bot.ws.ping}msです。`);
  }
}
