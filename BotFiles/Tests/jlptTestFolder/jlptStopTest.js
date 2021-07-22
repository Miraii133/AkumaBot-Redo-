module.exports = {

  jlptStopTest: function(channelId) {
    console.log(`channelId: ${channelId}`);
    global.jlptRoleIndexMap.set(channelId, null);
    global.jlptUserMap.set(channelId, null);
    global.jlptChallengerMap.set(channelId, null);
    global.jlptChallengingMap.set(channelId, false);
    console.log(`Value of specific map after stopping: ${global.jlptChallengingMap.get(channelId)}`);
    console.log(global.jlptChallengingMap);
    console.log('Jlpt Stop test executed');
  },

};

