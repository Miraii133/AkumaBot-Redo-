const Discord = require('./BotFiles/node_modules/discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const message = require('./BotFiles/events/message.js');
const config = require('./BotFiles/config.json');

const eventFiles = fs.readdirSync('./BotFiles/events/').filter((file) =>
  file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./BotFiles/events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(bot, ...args));
  } else {
    bot.on(event.name, (...args) => event.execute (...args));
  }
}


bot.login(config.token);
