const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

  client.on("ready", async () => {
  console.log(`${client.user.username} is on!`);
  client.user.setActivity('POGO', {type: "streaming", url: "https://www.twitch.tv/pogoism"});
});


client.login(process.env.BOT_TOKEN); 
