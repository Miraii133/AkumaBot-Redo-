module.exports = {

  kanaStopTest: function(channelId) {
    global.kanaUserMap.set(channelId, null);
    global.kanaChallengerMap.set(channelId, null);
    global.kanaChallengingMap.set(channelId, false);
    console.log('Kana stop test executed');
    console.log('After command:');
    console.log(global.kanaChallengingMap);
  },
};

