const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
const moment2 = require('moment-timezone');
require('moment-duration-format');

  client.on("ready", async () => {
  console.log(`${client.user.username} is on!`);
 // client.user.setActivity('Pogoism', {type: "streaming", url: "https://www.twitch.tv/pogoism"})
    client.user.setActivity("POGO (p!help)", {type: "WATCHING"});
});

client.on('message', async (message) => {
//
if (message.content.toLowerCase().startsWith(`${prefix}pogoinfo`)) {
	  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
    let BSHFTW = "https://www.youtube.com/user/BSHFTW/featured"
    let pogo = "https://image.ibb.co/ihBqa0/HrAnGFw.png"
    let nick = "https://image.ibb.co/f5nsX0/nick.png"
    let pogoembed = new Discord.RichEmbed()
//     .setAuthor("Pogomix", nick)
//    // .setURL('https://soundcloud.com/pogomix/')
//     .setDescription(`Information on **POGO:**`)
    .setColor(0xc470fa)
    .addField("<:nick:502697290532913152> Pogomix", "Information on **POGO:**")
    .addField('POGO Bio', `POGO is a YouTuber, musician, and most importantly an Australian. He puts weird sounds into a blender and blasts them into a funky frappe for your earholes! He has been doing this on YouTube since Jun 7, 2007 (6/7/07), and has been making music as POGO since 2005. As of 01/06/19, he has over 218 MILLION views on YouTube alone with over 770k subs! Over a decade later he is still growing strong and inspiring new musicians.`)
    .addField(`POGO's YouTube Channel`, `[YouTube](https://www.youtube.com/user/Fagottron/featured)`, true)
    .addField(`POGO's Twitter`, `[Twitter](https://twitter.com/OfficialPogo?lang=en)`, true)
    .addField(`POGO's Instagram` , `[Instagram](https://www.instagram.com/pogomix/?hl=en)` , true)
    .addField(`POGO's Twitch`, `[Twitch](https://www.twitch.tv/pogoism)`)
    .addField(`POGO's Spotify`, `[Spotify](https://open.spotify.com/artist/1ng3xz2dyz57Z1WpnzM2G7)`, true)
    .addField(`POGO's SoundCloud`, `[SoundCloud](https://soundcloud.com/pogomix/)`, true)
    .addField(`POGO's iTunes`, `[iTunes](https://itunes.apple.com/us/artist/pogo/id215124992)`, true)
    .addField(`POGO's Facebook`, `[Facebook](https://www.facebook.com/officialpogomusic/)`, true)
    .addField(`POGO's Bandcamp`, `[Bandcamp](https://pogomix.bandcamp.com/)`)
    .addField(`POGO's Website`, `[Website](http://www.pogomix.net/)`, true)
    .addField(`POGO's Other YT Channel`, `[Other YouTube](https://www.youtube.com/channel/UCG3aXJ4HoDugcg_E0E4y2VA)`, true)
    .addField(`Archive Channel`, `[Archive](${BSHFTW})`, true)
    .setImage("https://image.ibb.co/kc8a8L/kpteGYu.png")
    .setFooter("Pogo Music", `${client.user.displayAvatarURL}`)
    .setThumbnail(pogo) 
    .setTimestamp();
    return message.channel.send(pogoembed);
}
	
	if (message.content.toLowerCase().startsWith(`${prefix}getinvites`)) {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    let args = message.content.split(/ +/g).slice(1)
    let invite = client.guilds.get(args[0])
    if (!invite) return message.channel.send("Insert a vaild guild ID.")
  try {
   invite.fetchInvites().then(code => 
    message.channel.send(code.array()))
  } catch(e) {
    message.channel.send("No invites in this guild.")
  }
	}
	
	if (message.content.toLowerCase().startsWith(`${prefix}removeinvite`)) {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    let args = message.content.split(/ +/g).slice(1)
    let invite = client.guilds.get(args[0])
    if (!invite) return message.channel.send("Insert a vaild guild ID.")
  try {
   client.fetchInvite('https://discord.gg/ztGE3a2').then(d => d.delete())
  message.channel.send("Deleted.")
  } catch(e) {
    message.channel.send("No invites in this guild.")
    message.channel.send(e.stack)
  }
	}
	
	if (message.content.toLowerCase().startsWith(`${prefix}editorinfo`)) {
		  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
		    let sicon = message.guild.iconURL;
    let pogobunny = "https://image.ibb.co/eYf1QL/451822330801291294.png"
       let videoeditorembed = new Discord.RichEmbed()
       .setAuthor("Plunderphobic Fan Video Editors!", pogobunny)
       .setDescription(`Information on different fan video makers for different types of plunderphobic artists:`)
       .setColor(0xc470fa)
       .setURL('https://www.youtube.com/watch?v=Je38hhYch5Y&feature=youtu.be')
       .addField('Dawn Bots INC.', `[Hey there, I'm a piano player who sucks at making remixes. So instead of that I make videos for remixes, makes sense huh?](https://www.youtube.com/channel/UCogcXVY_KnXdrHzOYE_zWIA/featured)`)
       .addField('DJ Casca', `[Idk what this is maybe it'll be something great.](https://www.youtube.com/channel/UC5EXg9_Umsf0CSDxnwnJWqw/featured)`)
       .addField('goldpikpikcarrots', `[Hey everyone! I'm David, a film and video editor from Hawaii! This channel is dedicated to music video edits I've made of tracks by remix artists.](https://www.youtube.com/user/goldpikpikcarrots)`)
       .addField('Peter Day 2', `[Everything that doesn't make sense on Peter Day!](https://www.youtube.com/channel/UC8E2r80_G6EvugN17tzZPTw/featured)`)
       .addField('SusanHaywards', `[Hi! I'm K8](https://www.youtube.com/channel/UChBPYdg58wIvkergTSqPD5w)`)
       .addField('Scott Andrew', `[Creativity is fundamental.](https://www.youtube.com/user/sukotto420/featured)`)
       .addField('TheLeonors2', `[My Name Is Leonardo And I Make A Variety Of Music Videos.](https://www.youtube.com/user/TheLeonors2/featured)`)
       .setThumbnail(sicon) 
       message.channel.send(videoeditorembed)
	}
	if (message.content.toLowerCase().startsWith(`${prefix}artistinfo`)) {	
		  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
//     let sicon = message.guild.iconURL;
//     let pogobunny = "https://image.ibb.co/eYf1QL/451822330801291294.png"
//     let blujayembed = new Discord.RichEmbed()
//     .setAuthor("Other C&S/Plunderphonic Artists!", pogobunny)
//     //.setTitle("<:pogobunny:502698235845017611> Other C&S/Plunderphonic Artists!")
//     .setURL('https://www.youtube.com/watch?v=TdcaqS5YUlM&index=1&list=PLLvtWLHvnsz3WfKOLkQiKQZBoM9EoRg_B')
//     .setDescription(`Information on other artists who also do chopped and screwed vocals or plunderphonics as they are offically called, or pogo-like/pogo styled music. And I will be providing links the place they upload/used to upload often:`)
//     .setColor(0xc470fa)
//     .addField('Ashley Chirnside', `[Ashley Chirnside](https://soundcloud.com/ashley-chirnside)`)
//     .addField('AtlasGeneticist', `[I post here every once in a while and plan to release a lot more once I'm used to music making](https://soundcloud.com/somethingworks)`)
//     .addField('Avery Blue', `[Follow me on a musical adventure of learning and fun](https://www.youtube.com/channel/UCjN5hZ33RhSsOsZwkUS20Yw/featured)`)
//     .addField('Ben Storey', `[I like to fiddle around with sounds](https://www.youtube.com/user/OoFrenchyo/featured)`)
//     .addField('Blujaymix', `[I am a goofy goober who mixes with samples (/o3o)/](https://soundcloud.com/blujay55555)`)
//     .addField('Clod B', `[I make music sometimes ◙▒◙♫♩♬](https://soundcloud.com/clod-b)`)
//     .addField('DerpsMcPinapple', `[I like making music and memes I guess. Meme-Music](https://soundcloud.com/derpsmcpineapple)`)   
//     .addField('efryo - MusicOfPlus', `[I'm fascinated by music and the different ways it can be put together](https://www.youtube.com/user/efryo/featured)`)   
//     .addField('Geshtro', `[Geshtro](https://soundcloud.com/geshtro)`)
//     .addField('HomeStarRunnerTron', `[I'm AWOL from the Internet until November 2018!](https://www.youtube.com/user/HomeStarRunnerTron/featured)`)
//     .addField('IDGlitch', `[IDM, Ambient, and trying different things every time.](https://soundcloud.com/idglitch)`)
//     .addField('Jawka', `[Jawka](https://soundcloud.com/jawka)`)    
//     .addField('Jeesh', `[I like to think I'm painting with sound but, that sounds far too pretentious](https://soundcloud.com/jeesh)`)
//     .addField('Jyndo', `[Experimental electronic. (And some jazz beats)](https://soundcloud.com/thejyndo)`)
//     .addField('Julow', `[Julow (ex Jules Kennedvitch)](https://soundcloud.com/voodoorising)`)
//     .addField('liltommyj', `[If you like remixes of things then you should LEAVE IMMEDIATELY](https://www.youtube.com/user/liltommyj/featured)`)
//     .addField('MrAjaunte', `[Plunder-Music....Phonics....PLUNDERPHONICS](https://soundcloud.com/mrajaunte)`)
//     .addField('Mr. Heuer', `[I'm just some dude from Southern Indiana](https://www.youtube.com/user/MrHeuer1/featured)`)
//     .addField('mrsimon', `[MUSIC and YTP from si mcclure](https://www.youtube.com/mrsimon34)`) 
//     .addField('OneSimpleGamer', `[Video Editor and Music Creator](https://www.youtube.com/channel/UCjhrBvrgZI44KceWCAbqsfQ)`)
//     .addField('P.SUS', `[SoundCloud has limited upload space, so I will need to be taking songs down](https://soundcloud.com/p-sus)`)
//     .addField('R4YMiX', `[Hello, I'm R4YMiX! A guy from Brazil that makes music as a hobby!](https://www.youtube.com/channel/UCQ9UTdwEDChczmWFOKY_OTQ)`)
//     .addField('RemixLuke', `[My Pogo inspired music will be posted on this channel, stay tuned](https://soundcloud.com/remixluke)`)
//     .addField('SimmerTunes', `[Formerly known as ShowToonZ](https://soundcloud.com/simmertunes)`) 
//     .addField('Smuffy', `[Smuffy, AKA Joshua Smith: a music producer from Brisbane, Australia trying to figure out just how this strange industry works](https://soundcloud.com/smuffy)`)
//     .addField('ThinkFishTank', `[Plunderphonics artist from Maine](https://soundcloud.com/thinkfishtank)`)
//     .setFooter("If you would like more people you think should be added, contact me at Soldz (CF)#6819.", `${client.user.displayAvatarURL}`)
//     .setThumbnail(sicon) 
//     return message.channel.send(blujayembed);
		   let pages = [`Ashley Chirnside - [Ashley Chirnside](https://soundcloud.com/ashley-chirnside) \n AtlasGeneticist - [I post here every once in a while and plan to release a lot more once I'm used to music making](https://soundcloud.com/somethingworks) \n Avery Blue - [Follow me on a musical adventure of learning and fun](https://www.youtube.com/channel/UCjN5hZ33RhSsOsZwkUS20Yw/featured) \n Ben Storey - [I like to fiddle around with sounds](https://www.youtube.com/user/OoFrenchyo/featured) \n Blujaymix - [I am a goofy goober who mixes with samples (/o3o)/](https://soundcloud.com/blujay55555) \n Clod B - [I make music sometimes ◙▒◙♫♩♬](https://soundcloud.com/clod-b) \n DerpsMcPinapple - [Hi. I like to remix stuff and throw bits of audio together.](https://soundcloud.com/derpsmcpineapple) \n efryo/MusicOfPlus - [I'm fascinated by music and the different ways it can be put together](https://www.youtube.com/user/efryo/featured) \n Geshtro - [Geshtro](https://soundcloud.com/geshtro) \n HomeStarRunnerTron - [I'm AWOL from the Internet until November 2018!](https://www.youtube.com/user/HomeStarRunnerTron/featured) \n IDGlitch - [IDM, Ambient, and trying different things every time.](https://soundcloud.com/idglitch) \n Jawka - [Jawka](https://soundcloud.com/jawka) \n Jeesh - [I like to think I'm painting with sound but, that sounds far too pretentious](https://soundcloud.com/jeesh) \n Jyndo - [Experimental electronic. (And some jazz beats)](https://soundcloud.com/thejyndo) \n Julow - [Julow (ex Jules Kennedvitch)](https://soundcloud.com/voodoorising)`, 
  `liltommyj - [If you like remixes of things then you should LEAVE IMMEDIATELY](https://www.youtube.com/user/liltommyj/featured) \n MrAjaunte - [Plunder-Music....Phonics....PLUNDERPHONICS](https://soundcloud.com/mrajaunte) \n Mr. Heuer - [I'm just some dude from Southern Indiana](https://www.youtube.com/user/MrHeuer1/featured) \n mrsimon - [MUSIC and YTP from si mcclure](https://www.youtube.com/mrsimon34) \n OneSimpleGamer - [Video Editor and Music Creator](https://www.youtube.com/channel/UCjhrBvrgZI44KceWCAbqsfQ) \n P.SUS - [SoundCloud has limited upload space, so I will need to be taking songs down](https://soundcloud.com/p-sus) \n R4YMiX - [Hello, I'm R4YMiX! A guy from Brazil that makes music as a hobby!](https://www.youtube.com/channel/UCQ9UTdwEDChczmWFOKY_OTQ) \n RemixLuke - [My Pogo inspired music will be posted on this channel, stay tuned](https://soundcloud.com/remixluke) \n SimmerTunes - [Formerly known as ShowToonZ](https://soundcloud.com/simmertunes) \n Smuffy - [Smuffy, AKA Joshua Smith: a music producer from Brisbane, Australia trying to figure out just how this strange industry works](https://soundcloud.com/smuffy) \n ThinkFishTank - [Plunderphonics artist from Maine](https://soundcloud.com/thinkfishtank)`]
  // '']; 
  let page = 1; 
  let pogobunny = "https://image.ibb.co/eYf1QL/451822330801291294.png"
  let sicon = message.guild.iconURL;
 const embed = new Discord.RichEmbed() 
    .setAuthor("Other Plunderphonic Artists!", pogobunny)
    .setDescription(pages[page-1])
    .setColor(0xc470fa)
    .setFooter(`Page ${page} of ${pages.length} | If you would like more people you think should be added, contact me at Soldz (CF)#6819.`, client.user.displayAvatarURL) 
    .setThumbnail(sicon) 
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⬅').then( r => { 
      msg.react('➡') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length} | If you would like more people you think should be added, contact me at Soldz (CF)#6819.`, client.user.displayAvatarURL); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length} | If you would like more people you think should be added, contact me at Soldz (CF)#6819.`, client.user.displayAvatarURL); 
        msg.edit(embed) 
      })
   
    })
 
  })
	  
}
	

    if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
	      let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
	let server = message.guild.name;
	let helpembed = new Discord.RichEmbed()
	.setTitle(`🎶 ${server} Commands`)
	.setDescription(`The commands of ${server}:`)
	.setColor(0xc470fa)
	.addField('<:pogo:502699144163360769> `p!pogoinfo`', "If you are a new fan, old fan, or someone who just wants to know about POGO, read it all in here.")
	.addField('💿 `p!artistinfo`', "Oh man, there are tons of other artists out there that do stuff like POGO so get on out there and support em! **WARNING**: Long list of people, beware.")
	.addField('🖼 `p!avatar`', "Displays the avatar/pfp (profile picture) of yourself or any user you mention.")
	.addField('🤖 `p!botinfo`', "Infomation on POGO bot.")
        .addField('📹 `p!editorinfo`', "Information on different types of video editors of the community.")
	.addField('❓ `p!info`', "Information on little things and facts about POGO.")
        .addField('<:DONK:502699143287013386> `p!remix`', "Surprises you with a random remix from a generated queue of over 100 remixes.") 
	.addField('🔌 `p!serverinfo`', `Infomation on ${server}.`)
	.addField('👩 `p!userinfo`', "Information on yourself and other users roles, status, tag, etc.") 
	.setTimestamp();
    return message.channel.send(helpembed);
message.react("🎧")
  }
		
			 if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) { 
				   let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
      	    let args = message.content.split(/ +/g).slice(1) 
				 let infoperson = args.join(' ')
          let player = message.mentions.members.first() || message.guild.members.find(mem => mem.id === args[0]) || message.guild.members.find(mem => mem.user.tag === infoperson) || message.guild.members.find(mem => mem.user.username === infoperson) || message.guild.members.find(mem => mem.nickname === infoperson) || message.member
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${player.user.tag}`, `${player.user.displayAvatarURL}`)
    .setTitle('Avatar')
    .setURL(player.user.displayAvatarURL)
    .setImage(player.user.displayAvatarURL)
    .setColor(0xc470fa)
    return message.channel.send(avatarEmbed);
}
		
		  if (message.content.toLowerCase().startsWith(`${prefix}botinfo`)) {
  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
    let bicon = client.user.displayAvatarURL;
    let pogoears = "https://image.ibb.co/eYf1QL/451822330801291294.png"
    let botembed = new Discord.RichEmbed()
    .setAuthor("PogoBot Information", pogoears)
    .setDescription(`Information on ${client.user.username}:`)
    .setColor(0xc470fa)
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username, true)
    .addField("Bot Tag", client.user.tag, true)
    .addField("ID", client.user.id, true)
    .addField("Last Update", `${moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]')} ago`, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Discord.js Version", "discord.js 11.5.0", true)
    .setFooter("Created By Soldz (CF)#6819", `${client.user.displayAvatarURL}`)
    .setTimestamp();
    return message.channel.send(botembed);
  }      
		
	
if (message.content.toLowerCase().startsWith(`${prefix}serverinfo`)) {	
	  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
    let sicon = message.guild.iconURL;
    let server = message.guild.name;
    let rolesize = message.guild.roles.size - 1;
    let realtotal = message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size;
    let serverembed = new Discord.RichEmbed()
    .setTitle("👑 Server Information")
    .setDescription(`Information on ${server}:`)
    .setColor(0xc470fa)
    .addField('Server ID', message.guild.id, true)
    .addField('Server Name', message.guild.name, true)
    .addField('Humans', `${realtotal}`, true)
    .addField('Bots', `${message.guild.members.filter(m => m.user.bot).size}`, true)
    .addField('Member Total', message.guild.memberCount, true)
    .addField('Role Count', `${rolesize}`, true)
    .addField('Channel Total', message.guild.channels.size, true)
    .addField('Region', message.guild.region, true) 
    .addField('Made On', message.guild.createdAt.toLocaleDateString(), true)
    .addField('Server Owner', message.guild.owner, true)
    .addField('Server Link', "https://discord.gg/F3tKfEu", true)
    .setFooter(`${server}`, sicon)
    .setThumbnail(sicon) 
    .setTimestamp();
    return message.channel.send(serverembed);
  }
	
		if (message.content.startsWith(`${prefix}userinfo`)) {
                         //if(message.author.id !== '363499842607120384', '272450070559850498') return;
			  let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
			                  const status = {
        false: "Human",
        true: "Bot"
      }
					  const onlineofflineidlednd = {
        online: "Online",
        idle: "Idle",
	dnd: "Do Not Disturb", 
        offline: "Offline"
      }
	    let args = message.content.split(/ +/g).slice(1) 
	         let infoperson = args.join(' ')
          let player = message.mentions.members.first() || message.guild.members.find(mem => mem.id === args[0]) || message.guild.members.find(mem => mem.user.tag === infoperson) || message.guild.members.find(mem => mem.user.username === infoperson) || message.guild.members.find(mem => mem.nickname === infoperson) || message.member
            let iicon = player.user.displayAvatarURL;
            let roles = player.roles.map(role => role).slice(1).join(" ") || "None";
	    let user = player.user
	    let rolesize = player.roles.size - 1;
            let userEmbed = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .setColor(0xc470fa)
            .addField('User ID', user.id, true)
            .addField('Current Tag', user.tag, true)
            .addField('Server Nickname', `${player.displayName}`, true) 
            .addField('Highest Member Role', `<@&${player.highestRole.id}>`, true)
            .addField(`Roles [${rolesize}]`, `${roles}`)
            .addField('Game/Playing', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'None'}`, true)
            .addField('Status', onlineofflineidlednd[user.presence.status], true)
            .addField('Bot/Human', status[user.bot], true)
            .addField('Joined Server On:', `${moment2(player.joinedAt).format('LLLL')}` + '\n' + `${player.user.tag} joined` + ' ' + moment2(new Date()).diff(player.joinedAt, 'days') + ' days ago')
            .addField('Account Created On:', `${moment2(player.user.createdAt).format('LLLL')}`)
            .setThumbnail(iicon)
            .setTimestamp();
	return message.channel.send(userEmbed);
	}

 if (message.content.toLowerCase().startsWith(`${prefix}info`)) {
	   let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
    let pogo = "https://image.ibb.co/kc8a8L/kpteGYu.png"	
    let pogonick = "https://image.ibb.co/bTtSzf/pogonick.png"
    let infoembed = new Discord.RichEmbed()
    .setAuthor("More Information About POGO", pogonick)
    .setDescription(`Fun Fact: POGO/Nick Bertke turned 30 years old in 2018!`)
    .setColor(0xc470fa)
    .addField("POGO's Real Name", "Christopher Nicholas Bertke.", true)
    .addField("Most Popular YouTube Video", "Over a decade ago POGO uploaded his famous Alice disney remix and today sits at 22M views!")
    .addField("Location: Australia", `Did you know that [Smuffy](https://soundcloud.com/smuffy) and POGO live in the same country? Crazy right?`)
    .addField("Unfinished Projects", `Some of POGO's most well known collabortains are with people like Jeesh ([The Trouble](https://www.youtube.com/watch?v=FRSr0GprIIw)) & John Sean ([Vision](https://www.youtube.com/watch?v=hpx-742y_IY)), but did you know he has started projects with other people and Jeesh that he never finished? There are many channels on youtube and soundcloud accounts that have these around. Such as [The Malorie Smith Collective](https://soundcloud.com/malorie-smith-148602862) (they have tons of original music, I suggest listening to them you won't regret it!), [Simply Not My Trackz](https://soundcloud.com/simplynotmytrackz), [Unreleased and Rare Pogo](https://www.youtube.com/channel/UCBLj4LEIBfeyszoXmMwZkAg) and many more! Go explore and find some.`) 
    .addField("Behind The Logo", `Have you ever wondered why POGO's logo is a bunny head? Well on a stream that is now down when someone asked about it he said something on the lines of "I was dating a girl and I asked her to draw me something for my channel and she came up with that."`)
    .addField("Another Logo Fact", `If you look close enough on Mickey Mouse's face you can see the Pogo logo. Mickey Mouse's eyes and nose specifically.`)
    .addField("The Visa, The US, and The POGO", "As many fans know, pogo was banned from the US after an incident with his visa back in 2011 and was put on a 10 year ban from coming back which is thankfully over in 2021 and he will be allowed to return to the USA. The old video of him explaining this is most likely gone for some reason not sure why. He even spent 3 weeks in prison, which he talks about that and the visa thing [here.](https://youtu.be/PErGN3QuE34?t=7708)")
   // .addField("POGO's Sub Count", `Back in 2011, POGO used to have over 1.5 million subs (which explains why in some videos you can see a 1M Play Button) before the visa issue that got him to lose over 70-74% of his subs at the time. Leaving him at around 430-450k subs after he got released, and you couldn't subscribe to him either at the time.`) 
    .addField("POGO Tips", "Want some advice on how to start out on making music? [Pogo Tips.](https://www.youtube.com/watch?v=nSlBiBu6-fs)")
    .addField("POGO's Politics", "Did you know that Pogo has a political opinion?! There are many videos, but this is one of the [*favorites.*](https://youtu.be/PErGN3QuE34?t=4695)")
    .addField("Is Nick a Homophobic Bigot? ", `To answer the question straightforwardly, no. Pogo addresses this in detail in a video, that is now taken down, but Pewdiepie talks about this in a video and shows the video. I'd suggest watching this for more information on the subject: [YouTube.](https://youtu.be/_nChWc24ZM4?t=38)`)   
    .setFooter("Fun Fact: This bot used to be an upload informer for the creator.", `${client.user.displayAvatarURL}`)
    .setThumbnail(pogo)      
    .setTimestamp();
    return message.channel.send(infoembed);
  }  
	
    if (message.content.toLowerCase().startsWith(`${prefix}remix`)) {
	      let nonoembed = new Discord.RichEmbed()
			  .setColor(0xc470fa)
			  .addField("We don't want spam!", "Sorry but you can only use my commands in <#531606891575377921>!")
			  if (message.channel.name !== 'pogo-bot-channel') return message.channel.send(nonoembed).then(msg => msg.delete(10000))
let remixes = ['https://www.youtube.com/watch?v=Dj-Xn1l60io', "https://www.youtube.com/watch?v=ubG4hSoSxuI", "https://www.youtube.com/watch?v=vPrnQP-q3dc", "https://www.youtube.com/watch?v=S1t7oHwzjw8", "https://www.youtube.com/watch?v=oXjKfTjy7wA", "https://www.youtube.com/watch?v=--8oywtLG2I", "https://www.youtube.com/watch?v=mGEcMWyeSVk", "https://www.youtube.com/watch?v=8sX2vxwU7Vg", "https://www.youtube.com/watch?v=Y_RGCHos63I", "https://www.youtube.com/watch?v=tnlhWwRagAg", "https://www.youtube.com/watch?v=2L6POqtJ_Bk", "https://www.youtube.com/watch?v=lryVSUuAPyI", "https://www.youtube.com/watch?v=d6Ipsoz9w_I", "https://www.youtube.com/watch?v=e9X6D_5erLU", "https://www.youtube.com/watch?v=erb9aNcX0IU", "https://www.youtube.com/watch?v=G8pptpmkHXg&t=2s", "https://www.youtube.com/watch?v=_DvWP9hzEsc", "https://www.youtube.com/watch?v=lvgRO_ZntEI", "https://www.youtube.com/watch?v=5hOlNNznVwo", "https://www.youtube.com/watch?v=QaUmJdJ354w", "https://www.youtube.com/watch?v=4MbFSVzUI5I", "https://www.youtube.com/watch?v=073ZVf72Bj0", "https://www.youtube.com/watch?v=JPizGlTuBfk", "https://www.youtube.com/watch?v=GqDzYpzNiMI", "https://www.youtube.com/watch?v=6fCvJ1mTjqo", "https://www.youtube.com/watch?v=ewy3uXVLekA", "https://www.youtube.com/watch?v=qlEjC2ctb40", "https://www.youtube.com/watch?v=DkUmHT_wrsg", "https://www.youtube.com/watch?v=fDgSSMemnDk", "https://www.youtube.com/watch?v=6fGRj38N8bI&t=2s", "https://www.youtube.com/watch?v=fvOuWUKaszI", "https://www.youtube.com/watch?v=LG5saoOpsno", "https://www.youtube.com/watch?v=_YOYk9niqDI", "https://www.youtube.com/watch?v=fWJGNXoskVg", "https://www.youtube.com/watch?v=kD7GtZwweDk", "https://www.youtube.com/watch?v=1N65XUBJh8Y", "https://www.youtube.com/watch?v=JXcBHpeMBaQ", "https://www.youtube.com/watch?v=TUhCrPjOqe8&t=1s", "https://www.youtube.com/watch?v=_VHrh3R5p7U", "https://www.youtube.com/watch?v=kzDsODNcAOw", "https://www.youtube.com/watch?v=QUVn1flY0AA", "https://www.youtube.com/watch?v=hWe5sEkaCEU", "https://www.youtube.com/watch?v=JZXURBRGakM", "https://www.youtube.com/watch?v=ITtNW44QAAI", "https://www.youtube.com/watch?v=AZn6c4CeJCc", "https://www.youtube.com/watch?v=MvfkyURi89A", "https://www.youtube.com/watch?v=Q_Co7er4Vuk", "https://www.youtube.com/watch?v=PW5_GNG7q2w", "https://www.youtube.com/watch?v=5Xid6tLTg3c", "https://www.youtube.com/watch?v=lLJYLtz3Usw", "https://www.youtube.com/watch?v=xJ4-vj4zBcw", "https://www.youtube.com/watch?v=dDGfCt6m76w", "https://www.youtube.com/watch?v=yJ_DVIRUSyc&t=1s", "https://www.youtube.com/watch?v=BN90rckRV5Q", "https://www.youtube.com/watch?v=k4qJ1gbzUwQ", "https://www.youtube.com/watch?v=y8Eap60iY9c", "https://www.youtube.com/watch?v=11cSTaN16vI", "https://www.youtube.com/watch?v=nwU6zQc-Bv4&", "https://www.youtube.com/watch?v=CxqAKoCCWr4", "https://www.youtube.com/watch?v=SPbijgSYe_4", "https://www.youtube.com/watch?v=LzDh3Fs4ezU", "https://www.youtube.com/watch?v=VEc6sFOfSfw", "https://www.youtube.com/watch?v=32cnJhNh-Yo", "https://www.youtube.com/watch?v=Oe-X-Or36iI", "https://www.youtube.com/watch?v=DqDbBej2unk", "https://www.youtube.com/watch?v=OSmp2a6UsLg", "https://soundcloud.com/derpsmcpineapple/clubber", "https://www.youtube.com/watch?v=nwU6zQc-Bv4", "https://soundcloud.com/blujay55555/a-h-h", "https://soundcloud.com/blujay55555/skylight", "https://metapop.com/derpsmcpineapple/tracks/blujaymix-38-dmp-be-my/85370d.com", "https://soundcloud.com/derpsmcpineapple/weightless-pogo-mashup", "https://soundcloud.com/derpsmcpineapple/side-quest", "https://soundcloud.com/farliechales/my-neighbor", "https://soundcloud.com/farliechales/fallonism", "https://soundcloud.com/voodoorising/blue-words", "https://soundcloud.com/voodoorising/my-world-alternate-2018-version", "https://soundcloud.com/p-sus/goodnight-cody-i-met-a-whale-psus-re-arrange", "https://soundcloud.com/p-sus/by-my-side", "https://soundcloud.com/ashley-chirnside/beautiful-night", "https://soundcloud.com/ashley-chirnside/magical-food", "https://soundcloud.com/musicofplus/kininarimasu", "https://soundcloud.com/simplynotmytrackz/its-jaaam-time-pogos-eleven-jaaam-but-simply-a-mashup-by-me", "https://soundcloud.com/simplynotmytrackz/cigars-cystal-meth", "https://www.youtube.com/watch?v=9PsedAXnEUo", "https://soundcloud.com/himynameiseugene/it-efryo-remix", "https://www.youtube.com/watch?v=hY8jmmUT1t4", "https://soundcloud.com/mrajaunte/the-polar-express-remix-wish-upon-a-star-mix", "https://soundcloud.com/mrajaunte/sugar-rush-mrajaunte", "https://soundcloud.com/mrajaunte/rag-tag-mrajaunte", "https://www.youtube.com/watch?v=vGrMQhowWIQ", "https://www.youtube.com/watch?v=Lc4s7okd9UQ", "https://www.youtube.com/watch?v=GFwwUaDpBhE", "https://www.youtube.com/watch?v=uN6g8JxVzXw", "https://www.youtube.com/watch?v=hU95tRlo8do&t", "https://www.youtube.com/watch?v=UBMIE0bhH5c", "https://www.youtube.com/watch?v=_e-bxdaleSg", "https://www.youtube.com/watch?v=nwRxpWjSVzc", "https://www.youtube.com/watch?v=XK1ysRZ8Wis", "https://www.youtube.com/watch?v=SqyPiowOSN8", "https://youtu.be/aZlmyCmaJ2k", "https://www.youtube.com/watch?v=eYBC5y5qbDY", "https://www.youtube.com/watch?v=xCKRI_3q13Q", "https://www.youtube.com/watch?v=QCPJajxWB3E", "https://www.youtube.com/watch?v=lEniNLf4SDg", "https://www.youtube.com/watch?v=XQRbZQ75v7o", "https://www.youtube.com/watch?v=0F5A-p2enH8", "https://www.youtube.com/watch?v=aVX1C1k1P34", "https://www.youtube.com/watch?v=9VM15kh0B50", "https://www.youtube.com/watch?v=eK32fuhSBKs", "https://www.youtube.com/watch?v=aqhVhPERQWc&t", "https://www.youtube.com/watch?v=bFV9kA_ooUs", "https://www.youtube.com/watch?v=CFx5mXwpqtk", "https://www.youtube.com/watch?v=KVJ0xPaXevs", "https://www.youtube.com/watch?v=W7RnB06Mj_4", "https://www.youtube.com/watch?v=zixCr-Il5fY", "https://www.youtube.com/watch?v=1Act-AacEtI", "https://www.youtube.com/watch?v=LJWPCtnlOk4", "https://soundcloud.com/thejyndo/saturday", "https://soundcloud.com/simplynotmytrackz/fall-in-love-in-autumn-magik", "https://www.youtube.com/watch?v=gUov-ZFwflI&t", "https://www.youtube.com/watch?v=n3OgOoKj_-U", "https://soundcloud.com/derpsmcpineapple/picnic", "https://soundcloud.com/farliechales/it-doesnt-matter", "https://soundcloud.com/farliechales/inspire-pay-it-forward-remix", "https://soundcloud.com/mrajaunte/sonic-4-2-19", "https://soundcloud.com/blujay55555/ritmus", "https://soundcloud.com/blujay55555/tic-tac-tock-claire-sophia-mix", "https://soundcloud.com/blujay55555/kotoube-2019-remaster", "https://soundcloud.com/idglitch/double-vision", "https://soundcloud.com/idglitch/get-up", "https://soundcloud.com/simplynotmytrackz/stroll", "https://soundcloud.com/derpsmcpineapple/a-little-bit-of-monika-2019", "https://soundcloud.com/somethingworks/push-fun-02-extended-concept-pogo", "https://soundcloud.com/somethingworks/snoopydance-4219", "https://www.youtube.com/watch?v=t6Z7Md0brfc", "https://www.youtube.com/watch?v=b56Iyf3phRI", "https://www.youtube.com/watch?v=hY8jmmUT1t4&t", "https://soundcloud.com/malorie-smith-148602862/sound-dada-the-1975-remix", "https://www.youtube.com/watch?v=blijo0CnX2I", "https://soundcloud.com/malorie-smith-148602862/spaceship-gems-5-31-18-steven-universe-remix", "https://www.youtube.com/watch?v=1Mi7I66uIjA", "https://www.youtube.com/watch?v=fugJIOjia8c", "https://www.youtube.com/watch?v=t0up8kSAfeY", "https://soundcloud.com/idglitch/blinptoek", "https://soundcloud.com/derpsmcpineapple/raymix", "https://soundcloud.com/pogo-love/sets/pogo-live-stream-2019-edition", "https://www.youtube.com/watch?v=YvHw-NnaH9M", "https://www.youtube.com/watch?v=aH-hXafjFEA", "https://soundcloud.com/pogo-love/gardyn-grover-pogo", "https://soundcloud.com/voodoorising/life-melancholia-remix", "https://soundcloud.com/simplynotmytrackz/smuffys-coraloraline-dmp", "https://soundcloud.com/derpsmcpineapple/smuffy-coraloraline-dmp-bootleg", "https://soundcloud.com/pogo-love/what-is-i-nature-of-i-mix-pogo","https://www.youtube.com/watch?v=40lH4Luqfus", "https://soundcloud.com/derpsmcpineapple/as-a-musician", "https://www.youtube.com/watch?v=Hz8Ue1qFccc", "https://www.youtube.com/watch?v=LJWPCtnlOk4", "https://www.youtube.com/watch?v=lERhvG1ClqM", "https://soundcloud.com/derpsmcpineapple/completely-made-up", "https://www.youtube.com/watch?v=FgUpEklBg9E", "https://www.youtube.com/watch?v=wM0YKZpCaoo", "https://www.youtube.com/watch?v=EdaMUBL7bdM", "https://www.youtube.com/watch?v=36okRd4TDI8", "https://www.youtube.com/watch?v=ja5WqpsbcwU", "https://soundcloud.com/voodoorising/my-sunshine-wonka-remix", "https://www.youtube.com/watch?v=5fBCqAi_vBU", "https://www.youtube.com/watch?v=iDyEHUHwOYk", "https://www.youtube.com/watch?v=T1qxpeZEUsk", "https://www.youtube.com/watch?v=NsiRsh2cSUs", "https://www.youtube.com/watch?v=5jYL4DooPO0", "https://www.youtube.com/watch?v=U43tkfPjE4c"];
let result = Math.floor((Math.random() * remixes.length)); 
	let randomembed = new Discord.RichEmbed() 
               // .setTitle(`🎧 Random Remix`)
              // .setDescription(replies[result])
              //  .setColor("RANDOM")
	     //   .setImage(); https://soundcloud.com/derpsmcpineapple/pink-guy-asian-pizza-derpsmcpineapple-remix
	return message.channel.send(remixes[result]);
	}
		if (message.content.toLowerCase().startsWith(`${prefix}testremix`)) {
let remixes = ["https://www.youtube.com/watch?v=vPrnQP-q3dc", "https://www.youtube.com/watch?v=oXjKfTjy7wA", "https://www.youtube.com/watch?v=--8oywtLG2I", "https://www.youtube.com/watch?v=mGEcMWyeSVk", "https://www.youtube.com/watch?v=8sX2vxwU7Vg", "https://www.youtube.com/watch?v=Y_RGCHos63I", "https://www.youtube.com/watch?v=tnlhWwRagAg", "https://www.youtube.com/watch?v=2L6POqtJ_Bk", "https://www.youtube.com/watch?v=lryVSUuAPyI", "https://www.youtube.com/watch?v=d6Ipsoz9w_I", "https://www.youtube.com/watch?v=e9X6D_5erLU", "https://www.youtube.com/watch?v=erb9aNcX0IU", "https://www.youtube.com/watch?v=G8pptpmkHXg&t=2s", "https://www.youtube.com/watch?v=_DvWP9hzEsc", "https://www.youtube.com/watch?v=lvgRO_ZntEI", "https://www.youtube.com/watch?v=5hOlNNznVwo", "https://www.youtube.com/watch?v=QaUmJdJ354w", "https://www.youtube.com/watch?v=4MbFSVzUI5I", "https://www.youtube.com/watch?v=073ZVf72Bj0", "https://www.youtube.com/watch?v=JPizGlTuBfk", "https://www.youtube.com/watch?v=GqDzYpzNiMI", "https://www.youtube.com/watch?v=6fCvJ1mTjqo", "https://www.youtube.com/watch?v=ewy3uXVLekA", "https://www.youtube.com/watch?v=qlEjC2ctb40", "https://www.youtube.com/watch?v=DkUmHT_wrsg", "https://www.youtube.com/watch?v=fDgSSMemnDk", "https://www.youtube.com/watch?v=6fGRj38N8bI&t=2s", "https://www.youtube.com/watch?v=fvOuWUKaszI", "https://www.youtube.com/watch?v=LG5saoOpsno", "https://www.youtube.com/watch?v=_YOYk9niqDI", "https://www.youtube.com/watch?v=fWJGNXoskVg", "https://www.youtube.com/watch?v=kD7GtZwweDk", "https://www.youtube.com/watch?v=1N65XUBJh8Y", "https://www.youtube.com/watch?v=JXcBHpeMBaQ", "https://www.youtube.com/watch?v=TUhCrPjOqe8&t=1s", "https://www.youtube.com/watch?v=_VHrh3R5p7U", "https://www.youtube.com/watch?v=kzDsODNcAOw", "https://www.youtube.com/watch?v=QUVn1flY0AA", "https://www.youtube.com/watch?v=hWe5sEkaCEU", "https://www.youtube.com/watch?v=JZXURBRGakM", "https://www.youtube.com/watch?v=ITtNW44QAAI", "https://www.youtube.com/watch?v=AZn6c4CeJCc", "https://www.youtube.com/watch?v=MvfkyURi89A", "https://www.youtube.com/watch?v=Q_Co7er4Vuk", "https://www.youtube.com/watch?v=PW5_GNG7q2w", "https://www.youtube.com/watch?v=5Xid6tLTg3c", "https://www.youtube.com/watch?v=lLJYLtz3Usw", "https://www.youtube.com/watch?v=xJ4-vj4zBcw", "https://www.youtube.com/watch?v=dDGfCt6m76w", "https://www.youtube.com/watch?v=yJ_DVIRUSyc&t=1s", "https://www.youtube.com/watch?v=BN90rckRV5Q", "https://www.youtube.com/watch?v=k4qJ1gbzUwQ", "https://www.youtube.com/watch?v=y8Eap60iY9c", "https://www.youtube.com/watch?v=11cSTaN16vI", "https://www.youtube.com/watch?v=nwU6zQc-Bv4&", "https://www.youtube.com/watch?v=CxqAKoCCWr4", "https://www.youtube.com/watch?v=SPbijgSYe_4", "https://www.youtube.com/watch?v=t0up8kSAfeY"];
let result = Math.floor((Math.random() * remixes.length));
	let randomembed = new Discord.RichEmbed() 
                .set(`🎧 Random Remix`)
               .setDescription(remixes[result])
                .setColor(0xc470fa)
	        .setImage();
	return message.channel.send(randomembed);
   }
});

client.on('guildMemberAdd', async (member) => {  
  let user = member.user.tag;
  let guild = member.guild;
  let server = member.guild.name;
  let realtotal = guild.memberCount - guild.members.filter(m => m.user.bot).size;
  let newmember = [`What I Likes is ${user} being here.`, `I Want... ${user}!`, `Glad that ${user} could Jaaam their way over here.`, `Grow Fonder ${user}, Grow Fonder.`, `${user} has joined the server! Bloom-tastic!`, `There You Are, ${user}.`, `Aye Aye, ${user} has joined the server.`, `Get More Into Music, ${user}. I'm guessing that is why you are here though.`, `One Day With You, ${user} is the best type of day.`, `Scrumdiddlyumptious ${user}!`, `${user} joined. Closure is coming.`, `Great scott! ${user} has found the Time Machine!`, `We were expecting you, ${user}. The Ghan will see you now.`, `Catchatronic use disk on ${user}!`, `Down the Mellow Brick Road, ${user}!`, `Davyd, it's dangerous to go alone, take ${user}!`, `Don't be disturbed by the Toyz Noize, ${user}.`, `${user} is here to kick butt and eat Bite Size Candies. And ${user} is all out of Bite Size Candies.`, `Play It Again, Sam. ${user}'s here.`, `Bangarang, ${user} has entered into the server.`]
  let result = Math.floor((Math.random() * newmember.length)); 
  let newcomer = guild.channels.find(c => c.name === 'newcomers');
  let embed = new Discord.RichEmbed()
      .setColor(0xc470fa)
      .setDescription(newmember[result])
     // .setFooter(`There are now ${realtotal} humans in the server.`, client.user.displayAvatarURL)
      .setTimestamp();
  newcomer.send(embed);
member.addRole('451395867661041677');
let welcomeembed = new Discord.RichEmbed()
.setColor(0xc470fa)
.addField(`Welcome ${user}!`, `Hey, thanks for joining The Pogo Discord. Please view the <#451397099339251716> page to see what the whole server is about. Meet new people, share music/creations and have fun! - <@272450070559850498>`)
.setImage("https://cdn.discordapp.com/attachments/502209845685125122/531595521941569539/pogo_discord.png")
try {
   await member.send(welcomeembed)
    }catch(e){
    console.log("Eh, seems like their DMs were locked!")
    }
});

client.on("guildUpdate", function (oldGuild, newGuild) {
         let channel = client.channels.get("499832353544470539");
	 let gicon = newGuild.iconURL;
        const eeembed = new Discord.RichEmbed()
            .setColor("#7289da")
            .setThumbnail(gicon)
            .setAuthor(`Pogo's server has been Updated`, gicon)
            .addField(`Old Guild Name:`, `${oldGuild}`)
            .addField(`New Guild Name:`, `${newGuild}`)
        return channel.send(eeembed);
}); 


client.login(process.env.BOT_TOKEN); 
