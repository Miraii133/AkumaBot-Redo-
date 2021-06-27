/* eslint-disable max-len */
const kanaTestInfo = {
  testName: '天使 trial',
  passScore: '10',
  roleID: '857641836427083807',
};

// This contains all possible ways to type and input the
// kana command. Capitalization do not matter
const enumkanaCommand = {

  command1: `k!quiz hiragana+katakana ${kanaTestInfo.passScore} mmq=5 atl=8 dauq=0 daaq=0 aaww=0`,
  command2: `k!q hiragana+katakana ${kanaTestInfo.passScore} mmq=5 atl=8 dauq=0 daaq=0 aaww=0`,

};


const kanaCommand = Object.values(enumkanaCommand);

const enumkanaRooms = {
  Room1: '856356559466659840',
  Room2: '814522492222701669',
};
const kanaRooms = Object.values(enumkanaRooms);


module.exports = {
  kanaTestInfo,
  kanaCommand,
  kanaRooms};
