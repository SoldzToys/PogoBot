const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');

  client.on("ready", async () => {
  console.log(`${client.user.username} is on!`);
  client.user.setActivity('POGO', {type: "streaming", url: "https://www.twitch.tv/pogoism"});
});

client.on('message', async (message) => {
	
if (message.content.startsWith(`${prefix}pogoinfo`)) {		
    let pogo = "https://i.imgur.com/kpteGYu.png"
    let pogoembed = new Discord.RichEmbed()
    .setTitle("Pogomix")
    .setURL('https://soundcloud.com/pogomix/')
    .setDescription(`Information on **POGO:**`)
    .setColor(0x374f6b)
    .addField('POGO Bio', `POGO is a youtuber, musician, and most importantly an australian. He puts weird sounds into a blender and blasts them into a funky frappe for your earholes! He has been doing this on YouTube since Jun 7, 2007 (6/7/07), and as of 10/17/18, he has over 211 MILLION views on YouTube alone with over 700k subs! Over a decade later He is still growing strong and inspiring new musicians.`)
    .addField(`POGO's Youtube Channel`, `https://www.youtube.com/user/Fagottron/featured`, true)
    .addField(`POGO's Twitter`, `https://twitter.com/OfficialPogo?lang=en`, true)
    .addField(`POGO's Instagram` , `https://www.instagram.com/pogomix/?hl=en` , true)
    .addField(`POGO's Twitch`, `https://www.twitch.tv/pogoism`, true)
    .addField(`POGO's Spotify`, `https://open.spotify.com/artist/1ng3xz2dyz57Z1WpnzM2G7`, true)
    .addField(`POGO's Soundcloud`, `https://soundcloud.com/pogomix/`, true)
    .addField(`POGO's iTunes`, `https://itunes.apple.com/us/artist/pogo/id215124992`, true)
    .addField(`POGO's Facebook`, `https://www.facebook.com/officialpogomusic/`, true)
    .addField(`POGO's Website`, `http://www.pogomix.net/`, true)
    .addField(`POGO's Other YT Channel`, `https://www.youtube.com/channel/UCG3aXJ4HoDugcg_E0E4y2VA`, true)
    .setImage("https://i.imgur.com/kpteGYu.png")
    .setFooter(`${pogo}`)
    .setThumbnail(pogo) 
    .setTimestamp();
    return message.channel.send(pogoembed);
  });


client.login(process.env.BOT_TOKEN); 
