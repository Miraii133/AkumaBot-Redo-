module.exports = {

  jlptSetChallenger: function(message, roleIndex) {
    const channelId = message.channel.id;

    global.jlptRoleIndexMap.set(channelId, roleIndex);
    global.jlptUserMap.set(channelId, message.author.id);
    global.jlptChallengerMap.set(channelId, message.member);

    // set value of channel to true
    global.jlptChallengingMap.set(channelId, true);
    console.log(`Value of map after taking test: ${global.jlptChallengingMap.get(channelId)}`);
    console.log(global.jlptChallengingMap);
  },

};
