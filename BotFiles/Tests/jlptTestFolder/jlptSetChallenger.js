module.exports = {

  jlptSetChallenger: function(message, roleIndex) {
    console.log('jlpt test');
    if (global.jlptRoleIndexMap == null) global.jlptRoleIndexMap = new Map();
    if (global.jlptUserMap == null) global.jlptUserMap = new Map();
    if (global.jlptChallengingMap == null)global.jlptChallengingMap = new Map();
    if (global.jlptChallengerMap == null) global.jlptChallengerMap = new Map();
    const channelId = message.channel.id;

    global.jlptRoleIndexMap.set(channelId, roleIndex);
    global.jlptUserMap.set(channelId, message.author.id);
    global.jlptChallengerMap.set(channelId, message.member);
    /* for (i = 0; i < jlptChannels.size; i++) {
      global.jlptChallengingMap.set(jlptC[i], false);
    }*/
  },

};
