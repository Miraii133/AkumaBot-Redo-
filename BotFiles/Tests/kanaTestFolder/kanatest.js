/* eslint-disable require-jsdoc */
const {botInfo} = require('../../../botVariables');
const {kanaTestInfo} = require('./kanaVariables');

module.exports = {
  doKanaTest: function(message, messageEmbed) {
    /*
    if (global.challengingMap == null) global.challengingMap = new Map();
    if (global.challengerMap == null) global.challengerMap = new Map();
    if (global.userMap == null) global.userMap = new Map();

    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);


    global.challengingMap.set(channelId, false);
    global.challengerMap.set(channelId, message.member);
    global.userMap.set(channelId, message.author.id);*/
    const channelId = message.channel.id;
    if (global.userMap == null) global.userMap = new Map();
    if (global.challengingMap == null) global.challengingMap = new Map();
    if (global.challengerMap == null) global.challengerMap = new Map();


    global.userMap.set(channelId, message.author.id);
    global.challengerMap.set(channelId, message.member);
    global.challengingMap.set(channelId, true);
    console.log(`Hey${global.userMap.get(channelId, message.author.id)}`);


    for (const embed of message.embeds) {
      if (
        embed.title == null ||
        !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        global.challengingMap.set(channelId, false);
        console.log(`Quiz stopped by ${message.author.username}`);
        break;
      }

      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        // Slices the texts from final scores
        // To get the winner
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        const userId = global.userMap.get(channelId);
        const convertuserId = '<@' + userId + '>';
        if (tag != userId) {
          console.log(`tag${tag}`);
          console.log(`userId${userId}`);
          // Converts the ids to usernames
          const converttag = '<@' + tag + '>';
          const convertuserId = '<@' + userId + '>';
          messageEmbed
              .setTitle(
                  `Someone else passed the test!
                You need to take the test again!`,
              )
              .setDescription(
                  `**${convertuserId} started the test but ${converttag}
                 passed it first! Please do not interfere with the
                 JLPT role test of others!**`,
              )
              .setTimestamp();
          message.channel.send(messageEmbed);
          break;
        }
        if (score == kanaTestInfo.passScore) {
          message.channel.send(`${tag} passed the Kana test`);
          // Passing code

          const convertuserId = '<@' + userId + '>';
          messageEmbed
              .setTitle('**Congratulations!**')
              .setDescription(`${convertuserId} passed the Kana test!`)
              .setTimestamp();
          message.channel.send(messageEmbed);
          challenger.roles.add(kanaRole);
          global.challengingMap.set(channelId, false);
          break;
        }
      }
    }
  },

};
