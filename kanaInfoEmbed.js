const {enumkanaCommand} = require("./BotFiles/Tests/kanaTestFolder/kanaVariables")

const kanaInfoEmbed = {
    embedColor: '#008369',
    embedTitle: 'About 天使 Trial',
    
    embedWhatTitle: 'What is 天使 trial/Tenshi trial?',
    embedWhatDesc: 'This is a test that is required in order for you\
    to enter the server. This test consists of the Hiragana and\
    Katakana Reading Quiz which will be done through the Kotoba bot.',

    embedHowTitle: 'How do I take the trial?',
    embedHowDesc: 'Copy and paste the correct command (shown below)\
    into a channel that no one else is currently using\
    (otherwise the bot will not recognize your test).',

    embedWhereTitle: 'Where do I take the trial?',
    embedWhereDesc: 'The Tenshi gate category and its text channels are designated\
    channels for you to take the test. Click any of the rooms below, or\
     navigate through the server text channel lists.',

    embedCommandInfo: 'Cannot copy and paste the command above? Try this instead!',
    embedCommandText: `**${enumkanaCommand.command1}**`,

    embedRulesTitle: 'Rules inside 天使 trial/Tenshi trial rooms',
    embedRulesDesc: 'Read this first before proceeding to take the 天使 trial/Tenshi trial!',

    embedRules1: 
    '1. Do not interrupt someone while they are taking the 天使 trial/Tenshi trial.',
    embedRules2:
    '2. Find a room that has no one else taking the test to avoid conflict.',
    embedRules3: 
    '3. If someone is disrupting or interrupting you while you are taking the test.\
    immediately DM(Direct Message) a Moderator immediately so we can take action',
    embedRules4: 
    '4. You have unlimited tries.',

    embedRulesWarn: 'Anyone who is caught breaking these rules are **immediately banned without\
    exception.**',
}
module.exports = {
    kanaInfoEmbed
}