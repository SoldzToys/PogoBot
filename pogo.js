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
    let BSHFTW = "https://www.youtube.com/user/BSHFTW/featured"
    let pogo = "https://i.imgur.com/HrAnGFw.png"
    let pogoembed = new Discord.RichEmbed()
    .setTitle("Pogomix")
    .setURL('https://soundcloud.com/pogomix/')
    .setDescription(`Information on **POGO:**`)
    .setColor("RANDOM")
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
    .addField(`Secret Channel`, `${BSHFTW}`, true)
    .setImage("https://i.imgur.com/kpteGYu.png")
    .setFooter("Made By Soldz#6819", `${client.user.displayAvatarURL}`)
    .setThumbnail(pogo) 
    .setTimestamp();
    return message.channel.send(pogoembed);
}
	
	if (message.content.startsWith(`${prefix}artistinfo`)) {		
    let sicon = message.guild.iconURL;
    let blujayembed = new Discord.RichEmbed()
    .setTitle("Other C&S Artists!")
    .setURL('https://discord.gg/TtarM43')
    .setDescription(`Information on other artists who also do chopped and screwed vocals as they are offically called, or pogo-like/pogo styled music. And I will be providing links the place they upload/used to upload often:`)
    .setColor("RANDOM")
    .addField('Blujaymix', `I am a goofy goober who mixes with samples (/o3o)/: https://soundcloud.com/blujay55555`, true)
    .addField('OneSimpleGamer', `Video Editor and Music Creator: https://www.youtube.com/channel/UCjhrBvrgZI44KceWCAbqsfQ`, true)
    .addField('Jeesh', `I like to think I'm painting with sound but, that sounds far too pretentious: https://soundcloud.com/jeesh`, true)
    .addField('Smuffy', `Smuffy, AKA Joshua Smith: a music producer from Brisbane, Australia trying to figure out just how this strange industry works: https://soundcloud.com/smuffy` , true)
    .addField('mrsimon', `MUSIC and YTP from si mcclure: https://www.youtube.com/mrsimon34`, true)
    .addField('MrAjaunte', `Plunder-Music....Phonics....PLUNDERPHONICS: https://soundcloud.com/mrajaunte`, true)
    .addField('Ben Storey', `I like to fiddle around with sounds: https://www.youtube.com/user/OoFrenchyo/featured`, true)
    .addField('DerpsMcPinapple', `I like making music and memes I guess. Meme-Music: https://soundcloud.com/derpsmcpineapple`, true)
    .addField('Avery Blue', `Follow me on a musical adventure of learning and fun: https://www.youtube.com/channel/UCjN5hZ33RhSsOsZwkUS20Yw/featured`, true)
    .addField('Joromix', `Aesthetic™: https://soundcloud.com/joromixmusic`, true)
    .addField('Ashley Chirnside', `Ashley Chirnside: https://soundcloud.com/ashley-chirnside`, true)
    .addField('@/AtlasGeneticist', `I post here every once in a while and plan to release a lot more once I'm used to music making: https://soundcloud.com/somethingworks`, true)
    .addField('Geshtro', `Geshtro: https://soundcloud.com/geshtro`, true)
    .addField('efryo - MusicOfPlus', `I'm fascinated by music and the different ways it can be put together: https://www.youtube.com/user/efryo/featured`, true)
    .addField('liltommyj', `If you like remixes of things then you should LEAVE IMMEDIATELY: https://www.youtube.com/user/liltommyj/featured`, true)
    .addField('Mr. Heuer', `I'm just some dude from Southern Indiana: https://www.youtube.com/user/MrHeuer1/featured`, true)
    .addField('Julow', `Julow (ex Jules Kennedvitch): https://soundcloud.com/voodoorising`, true)
    .addField('Jawka', `Jawka: https://soundcloud.com/jawka`, true)
    .addField('P.SUS', `SoundCloud has limited upload space, so I will need to be taking songs down: https://soundcloud.com/p-sus`, true)
    .addField('RemixLuke', `My Pogo inspired music will be posted on this channel, stay tuned: https://soundcloud.com/remixluke`, true)
    .addField('Clod B', `I make music sometimes ◙▒◙♫♩♬: https://soundcloud.com/clod-b`, true)
    .addField('SimmerTunes', `Formerly known as ShowToonZ: https://soundcloud.com/simmertunes`, true)
    .setFooter("If you would like more people you think should be added, contact me at Soldz#6819.", `${client.user.displayAvatarURL}`)
    .setThumbnail(sicon) 
    return message.channel.send(blujayembed);
}
});


client.login(process.env.BOT_TOKEN); 
