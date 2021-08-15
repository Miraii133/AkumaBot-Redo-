const Discord = require('./BotFiles/node_modules/discord.js');
const bot = new Discord.Client();
// Export bot to be used in scanWinner.js 
const fs = require('fs'); 
const config = require('./config.json')

const token = config.token
module.exports = {bot, token};
  
// Scans folders for events
const eventFiles = fs.readdirSync('./BotFiles/events/').filter((file) =>
  file.endsWith('.js'));
  
  /*bot.users.fetch('637803530975051787', false).then((user) => {
    user.send('Did it send?');
   });*/

for (const file of eventFiles) {
  const event = require(`./BotFiles/events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args, bot));
  } else {
    bot.on(event.name, (...args) => event.execute (...args));
  } 
} 


bot.login(token);
