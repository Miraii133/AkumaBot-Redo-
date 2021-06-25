const kanaTestInfo = {
  testName: '天使 trial',
  passScore: '10',
  roleID: '857641836427083807',
};
const kanaCommand = {
  // eslint-disable-next-line max-len
  command: `k!quiz hiragana+katakana ${kanaTestInfo.passScore} mmq=5 atl=8 dauq=0 daaq=0 aaww=0`,

};
const enumkanaRooms = {
  Room1: '856356559466659840',
  Room2: '814522492222701669',
};
const kanaRooms = Object.values(enumkanaRooms);


module.exports = {
  kanaTestInfo,
  kanaCommand,
  kanaRooms};
