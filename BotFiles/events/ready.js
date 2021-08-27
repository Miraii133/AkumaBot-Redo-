/* eslint-disable max-len */
const {jlptCreateMaps} = require('../Tests/jlptTestFolder/jlptCreateMaps');
const {kanaCreateMaps} = require('../Tests/kanaTestFolder/kanaCreateMaps');

module.exports = {
  name: 'ready',
  once: true,
  execute(bot) {
    const activities = [
      `History of Dirge's church`,
      `Sublimal videos on Youtube`,
      `A documentary on wtf are Subliminal videos`,
      `The server get raided by bots`,
      `Dirge getting pecked by Crows in his balcony`,
      `Dirge's cows`,
      `The regulars leave the server :(`,
      `Teru correct my horrible grammar`,
      `The bot self-destruct for no reason`,
      `Aki's adorable pup`,
      `Anki decks fill up with 1000 card reviews`,
      `A pond looking for Silly`,
      `A documentary on Koalas [Updated 2021]`,
      `New users leave and then join again because of the 10 minute timer`,
      `GodStar auction his arm for money`,
      'aHna explain why Anki good',
      'Kelpso kick people without roles',
      'Kelpso shit on that one Japanese learning subreddit',
      `How to sell a Discord server for $30 in a Minecraft marketplace simulator`,
      `Hololive`,
      `Amatsuka Uto`,
      `How to smuggle Cows from India [Basic Updated 2021]`,

    ];
    i = 0;
    setInterval(
        () =>
          bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: 'WATCHING',

          }),
        // changes status every 5 minutes to maintain bot
        180000,
    );
    // rooms are set to false beforehand
    // prevents rooms from being null, gives value immediately
    jlptCreateMaps();
    console.log('Before command:');
    console.log(global.jlptChallengingMap);

    kanaCreateMaps();
    console.log('Kana before command:');
    console.log(global.kanaChallengingMap);
    console.log('Ready');
  },
};
