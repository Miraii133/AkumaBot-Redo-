/* eslint-disable require-jsdoc */

module.exports = {
  // This function will set the values of users who
  // takes the kana quiz
  kanaSetChallenger: function(message) {
    channelId = message.channel.id;
    global.kanaUserMap.set(channelId, message.author.id);
    global.kanaChallengerMap.set(channelId, message.member);
    global.kanaChallengingMap.set(channelId, true);
    console.log('Before Kana command:');
    console.log(global.kanaChallengingMap);
    console.log('Before command Kana user map:');
    console.log(kanaUserMap);
  },
};
