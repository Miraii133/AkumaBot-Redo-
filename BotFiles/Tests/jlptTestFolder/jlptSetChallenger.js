module.exports = {
  jlptSetChallenger: function(message, roleIndex) {
    channelId = message.channel.id;
    global.jlptRoleIndexMap.set(channelId, roleIndex);
    global.jlptUserMap.set(channelId, message.author.id);
    global.jlptChallengerMap.set(channelId, message.member);

    // set value of channel to true
    // to make sure that channelActive in message.js
    // is always false in start
    global.jlptChallengingMap.set(channelId, true);
    console.log('Before command:');
    console.log(global.jlptChallengingMap);
    console.log('Before command Jlpt user map:');
    console.log(jlptUserMap);
  },
};
