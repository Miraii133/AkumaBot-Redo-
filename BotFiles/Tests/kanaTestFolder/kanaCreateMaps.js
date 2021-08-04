const {kanaRooms} = require('./kanaVariables');

module.exports = {
  kanaCreateMaps: function() {
    if (global.kanaUserMap == null) global.kanaUserMap = new Map();
    if (global.kanaChallengerMap == null) global.kanaChallengerMap = new Map();
    if (global.kanaChallengingMap == null)global.kanaChallengingMap = new Map();

    kanaRooms.forEach((room) =>
      global.kanaChallengingMap.set(room, false));
    // Makes sure that user map will always be false at the start
    kanaRooms.forEach((room) =>
      global.kanaUserMap.set(room, false));
    console.log('Kana user map:');
    console.log(kanaUserMap);
  },

};
