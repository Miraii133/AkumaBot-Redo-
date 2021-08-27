const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
module.exports = {bot};
// Export bot to be used in scanWinner.js 
const fs = require('fs'); 




  
// Scans folders for events
const eventFiles = fs.readdirSync('./BotFiles/events/').filter((file) =>
  file.endsWith('.js'));
  
for (const file of eventFiles) {
  const event = require(`./BotFiles/events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args, ));
  } else {
    bot.on(event.name, (...args) => event.execute (...args));
  } 
} 

const mySecret = process.env['token']
bot.login(mySecret);
