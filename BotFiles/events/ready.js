const {jlptCreateMaps} = require('../Tests/jlptTestFolder/jlptCreateMaps');
const {kanaCreateMaps} = require('../Tests/kanaTestFolder/kanaCreateMaps');

module.exports = {
  name: 'ready',
  once: true,
  execute() {
    // rooms are set to false beforehand
    // prevents rooms from being null, gives value immediately
    jlptCreateMaps();
    console.log('Before command:');
    console.log(global.jlptChallengingMap);

    kanaCreateMaps();
    console.log('Kana before command:');
    console.log(global.kanaChallengingMap);
    console.log('Ready');
  },
};
