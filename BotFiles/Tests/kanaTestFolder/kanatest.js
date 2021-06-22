/* eslint-disable require-jsdoc */
const {kanaTestInfo} = require('./kanaVariables');

module.exports = {
  doKanaTest: function(message, messageEmbed) {
    if (global.challengingMap == null) global.challengingMap = new Map();
    if (global.challengerMap == null) global.challengerMap = new Map();
    if (global.userMap == null) global.userMap = new Map();
    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);
    const convertuserId = '<@' + userId + '>';

    global.challengingMap.set(channelId, false);
    global.challengerMap.set(channelId, message.member);
    global.userMap.set(channelId, message.author.id);


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
      // This loop retrieves id of user who passes
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        if (tag != userId) {
        // Cheating code
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
          const messageEmbed = new Discord.MessageEmbed()
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
