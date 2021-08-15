/* eslint-disable require-jsdoc */
const Discord = require('discord.js');
const {bot} = require('../..');
const {botInfo} = require('../../botVariables');
const messageEmbed = new Discord.MessageEmbed();


const {cheatEmbed, kanawinEmbed, kanaDmEmbed, kanaEmbedStyle} =
require('./embedTexts');
const {kanaStopTest} =
require('./kanaTestFolder/kanaStopTest');
const {kanaTestInfo} =
require('./kanaTestFolder/kanaVariables');

module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  kanaScanWinner: function(message, channelId) {
    const userId = global.kanaUserMap.get(channelId);
    const challenger = global.kanaChallengerMap.get(channelId);
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
        kanaStopTest(channelId);
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
        const convertuserId = '<@' + userId + '>';
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
          kanaStopTest(channelId);
          console.log('Quiz cheated');
          break;
        }
        if (score != kanaTestInfo.passScore) return;
        // Sends congratulation message in the channel where
        // user took the quiz
        messageEmbed
            .setTitle(kanawinEmbed.title)
            .setDescription(`${convertuserId} ${kanawinEmbed.description}`)
            .setColor(kanaEmbedStyle.borderColor)
            .setTimestamp();
        message.channel.send(messageEmbed);

        // DM user that they passed and are able to see the entire server
        try {
          bot.users.fetch(userId).then((dm) => {
            messageEmbed
                .setTitle(kanaDmEmbed.title)
                .setDescription(kanaDmEmbed.description)
                .setColor(kanaEmbedStyle.borderColor)
                .setTimestamp();
            dm.send(messageEmbed);
          });
        } catch (error) {
          bot.channels.cache.get(botInfo.resultSpamRoom)
              .send(`Bot is unable to DM ${convertuserId}!`);
        } finally {
          challenger.roles.add(kanaTestInfo.roleID);
          messageEmbed
              .setTitle('Notice')
              .setDescription(`${convertuserId} passed\
              ${kanaTestInfo.testName}!`)
              .setColor(kanaEmbedStyle.borderColor)
              .setTimestamp();
          // retrieves bot-result-spam channel
          // sends message there
          bot.channels.cache.get(botInfo.resultSpamRoom)
              .send(messageEmbed);
          kanaStopTest(channelId);
          return console.log('Kana Quiz finished');
        }
      }
    }
  },


};
