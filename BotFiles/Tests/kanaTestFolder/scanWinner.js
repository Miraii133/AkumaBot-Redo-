const {kanaTestInfo, userId} = require('./kanaVariables');

/* eslint-disable require-jsdoc */
module.exports = {
  scanWinner: function(message, messageEmbed) {
    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);
    console.log(`sent ${channelId} ${userId}`);
    for (const embed of message.embeds) {
      if (
        embed.title == null ||
      !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        global.challengingMap.set(channelId, false);
        console.log(`Quiz stopped by ${userId}`);
        break;
      }

      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;
        console.log(`person who did${userId}`);

        // Slices the texts from final scores
        // To get the winner
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz


        if (tag != userId) {
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
