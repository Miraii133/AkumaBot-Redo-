/* eslint-disable require-jsdoc */
const Discord = require('discord.js');
const messageEmbed = new Discord.MessageEmbed();

const {cheatEmbed, jlptwinEmbed} =
require('./embedTexts');
const {jlptTestInfo, jlptID, jlptembedImage,
  jlptembedColor, jlptroleName, jlptchannelTag} =
require('./jlptTestFolder/jlptVariables');

module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  jlptScanWinner: function(message) {
    const channelId = message.channel.id;
    const userId = global.challengingMap.get(channelId);
    const challenger = global.challengerMap.get(channelId);
    const testTaken = global.takenTestMap.get(channelId);
    console.log(`Test taken: ${testTaken}`);
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
        // Slices the texts from final scores
        // To get the name of the winner
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        const score = field.value
            .slice(startOfNumber, startOfNumber + 2) // 2
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
          break;
        }

        if (score == jlptTestInfo.passScore);
        const roleIndex = global.roleIndexMap.get(channelId);

        // Cannot add values directly.
        // will add the unique characters in the embed
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


        /* global.jlptRoleIndexMap.set(channelId, null);
    global.jlptUserMap.set(channelId, null);
    global.jlptChallengerMap.set(channelId, null);
    global.jlptChallengingMap.set(channelId, null);

    global.takenTestMap.set(channelId, null);

    global.kanaUserMap.set(channelId, null);
    global.kanaChallengerMap.set(channelId, null);
    global.kanaChallengingMap.set(channelId, null);*/
      }
    }
  },

};
