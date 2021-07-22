const {jlptRoom} = require('./jlptVariables');

module.exports = {
  jlptCreateMaps: function() {
    if (global.jlptRoleIndexMap == null) global.jlptRoleIndexMap = new Map();
    if (global.jlptUserMap == null) global.jlptUserMap = new Map();
    if (global.jlptChallengerMap == null) global.jlptChallengerMap = new Map();
    if (global.jlptChallengingMap == null)global.jlptChallengingMap = new Map();

    jlptRoom.forEach((room) =>
      global.jlptChallengingMap.set(room, false));
  },
};
