/* eslint-disable require-jsdoc */
const {bot} =
require('../../index');
const {cheatEmbed, kanawinEmbed, kanaDmEmbed, jlptwinEmbed, kanaEmbedStyle} =
require('./embedTexts');
const {jlptTestInfo, jlptID, jlptembedImage,
  jlptembedColor, jlptroleName, jlptchannelTag} =
require('./jlptTestFolder/jlptVariables');
const {kanaTestInfo} = require('./kanaTestFolder/kanaVariables');

module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  scanWinner: function(message, messageEmbed) {
    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);
    const challenger = global.challengerMap.get(channelId);
    const testTaken = global.takenTestMap.get(channelId);
    for (const embed of message.embeds) {
      if (
        // If the quiz taker fails
        embed.title == null ||
      !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      // If the quiz is stopped
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        return console.log('Quiz stopped');
      }
      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        // Slices the texts from final scores
        // To get the name of the winner
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        // converttag = Readable username of ID
        const converttag = '<@' + tag + '>';
        if (tag != userId) {
          // This embed is sent when someone else finishes the test
          // other than the one who triggered/started it.
          messageEmbed
              .setTitle(
                  `${cheatEmbed.title}`,
              )
              .setDescription(
                  // converttag displays the winner of theq uiz
                  // cheatEmbed.description displays the text for the embed
                  `${converttag} ${cheatEmbed.description}`,
              )
              .setTimestamp();
          message.channel.send(messageEmbed);
          global.challengingMap.set(channelId, false);
          global.takenTestMap.set(channelId, null);
          break;
        }

        if (score == jlptTestInfo.passScore &&
          testTaken == 'Jlpt') {
          // add condition that you need to be taking a specific exam
          const roleIndex = global.roleIndexMap.get(channelId);
          // this will replace the unique characters in the embed
          // to the correct values given by variables.
          jlptwinEmbed.description = jlptwinEmbed.description
              .replace('-user', converttag);
          jlptwinEmbed.description = jlptwinEmbed.description
              .replace('-role', `<@&${jlptroleName[roleIndex]}>`);
          jlptwinEmbed.description = jlptwinEmbed.description
              .replace('-jpchat', jlptchannelTag.roomName );

          messageEmbed
              .setTitle(jlptwinEmbed.title)
              .setDescription(`${jlptwinEmbed.description}`)
              .setColor(jlptembedColor[roleIndex])
              .setImage(jlptembedImage[roleIndex])
              .setTimestamp();
          message.channel.send(messageEmbed);

          challenger.roles.remove(jlptID).then(
              (value) => {
                challenger.roles.add(jlptID[roleIndex]);
              });
          global.challengingMap.set(channelId, false);
          global.takenTestMap.set(channelId, null);
        } else if (score == kanaTestInfo.passScore &&
          testTaken == 'Kana') {
          // Sends congratulation message in the channel where
          // user took the quiz
          messageEmbed
              .setTitle(kanawinEmbed.title)
              .setDescription(`${converttag} ${kanawinEmbed.description}`)
              .setColor(kanaEmbedStyle.borderColor)
              .setTimestamp();
          message.channel.send(messageEmbed);

          // DM user that they passed and are able to see the entire server
          bot.users.fetch(userId).then((dm) => {
            messageEmbed
                .setTitle(kanaDmEmbed.title)
                .setDescription(kanaDmEmbed.description)
                .setColor(kanaEmbedStyle.borderColor)
                .setTimestamp();
            dm.send(messageEmbed);
          });

          challenger.roles.add(kanaTestInfo.roleID);
          global.challengingMap.set(channelId, false);
          global.takenTestMap.set(channelId, null);
        }
      }
    }
  },

};
