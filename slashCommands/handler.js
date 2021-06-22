
// Requires variables stored in botVariables.js
// This mporarily ignored for now until I 

const { botInfo } = require("../botVariables");
client.api.applications(botInfo.ID)
    .guilds(botInfo.serverID)
    .commands.post({
      data: {
        name: 'restore',
        description: 'Restores your role when your studying role is stuck',
        // possible options here e.g. options: [{...}]
      },
    });

client.ws.on('INTERACTION_CREATE', async (interaction) => {
  const command = interaction.data.name.toLowerCase();
  const args = interaction.data.options;

  if (command === 'restore') {
    // here you could do anything. in this sample
    // i reply with an api interaction
    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: 'Your role has been restored!',
        },
      },
    });
  }
});
