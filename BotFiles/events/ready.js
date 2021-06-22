
module.exports = {
  name: 'ready',
  once: true,
  execute(bot) {
    console.log('Ready');
    bot.channels.cache.get('856356559466659840')
        .send(`Is online ${bot.user.username}`);
  },
};
