const jlptTestInfo = {
  passScore: '10',
};
const enumjlptCommand = {
  n5: `k!quizgn5+n5${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n4: `k!quizgn4+n4${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n3: `k!quizgn3+n3${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n2: `k!quizgn2+n2${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
  n1: `k!quizgn1+n1${jlptTestInfo.passScore}mmq=5atl=30dauq=4.5daaq=0aaww=0`,
};

// array of JLPT command
const jlptCommand = [
  enumjlptCommand.n5,
  enumjlptCommand.n4,
  enumjlptCommand.n3,
  enumjlptCommand.n2,
  enumjlptCommand.n1,
];

const enumjlptID = {
  n5: '779928524341116929',
  n4: '779928531912097812',
  n3: '779928533345501195',
  n2: '779928536596217856',
  n1: '779928538919993375',
};

const jlptID = [
  enumjlptID.n5,
  enumjlptID.n4,
  enumjlptID.n3,
  enumjlptID.n2,
  enumjlptID.n1,
];


const jlptroleName = Object.entries(jlptID);

const jlptroom = {
  room1: '779907252173668362',
  room2: '787604436277133353',
  room3: '823049788416065597',
};

const enumembedImage = {
  n5: 'https://i.imgur.com/OMGwNy1.png',
  n4: 'https://i.imgur.com/lgrRCyR.png',
  n3: 'https://i.imgur.com/h4sGE5m.png',
  n2: 'https://i.imgur.com/pwkndoC.jpg',
  n1: 'https://i.imgur.com/nrKlTx3.png',
};
const embedImage = [
  enumembedImage.n5,
  enumembedImage.n4,
  enumembedImage.n3,
  enumembedImage.n2,
  enumembedImage.n1,
];

const enumembedColor = {
  n5: '#63a7ff',
  n4: '#ff6363',
  n3: '#a763ff',
  n2: '#fd0061',
  n1: '#4dffd5',
};

const embedColor = [
  enumembedColor.n5,
  enumembedColor.n4,
  enumembedColor.n3,
  enumembedColor.n2,
  enumembedColor.n1,
];

module.exports = {
  jlptTestInfo,
  jlptCommand,
  jlptID,
  jlptroleName,
  jlptroom,
  embedImage,
  embedColor,
};
