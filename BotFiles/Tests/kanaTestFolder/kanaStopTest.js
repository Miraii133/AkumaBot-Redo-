module.exports = {

  kanaStopTest: function(channelId) {
    global.kanaUserMap.set(channelId, null);
    global.kanaChallengerMap.set(channelId, null);
    global.kanaChallengingMap.set(channelId, null);
    console.log('Kana stop test executed');
  },

};

