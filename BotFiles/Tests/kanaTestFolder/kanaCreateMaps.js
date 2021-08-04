const {kanaRooms} = require('./kanaVariables');

module.exports = {
  kanaCreateMaps: function() {
    if (global.kanaUserMap == null) global.kanaUserMap = new Map();
    if (global.kanaChallengerMap == null) global.kanaChallengerMap = new Map();
    if (global.kanaChallengingMap == null)global.kanaChallengingMap = new Map();

    kanaRooms.forEach((room) =>
      global.kanaChallengingMap.set(room, false));
  },

};
