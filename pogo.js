const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./botconfig.json');
const { prefix, token } = require('./botconfig.json');
const moment = require('moment');
const moment2 = require('moment-timezone');
require('moment-duration-format');

  client.on("ready", async () => {
  console.log(`${client.user.username} is on!`);
  client.user.setActivity('Pogoism (p!help)', {type: "streaming", url: "https://www.twitch.tv/pogoism"});
});

client.on('message', async (message) => {

if (message.content.toLowerCase().startsWith(`${prefix}pogoinfo`)) {	 
    let BSHFTW = "https://www.youtube.com/user/BSHFTW/featured"
    let pogo = "https://image.ibb.co/ihBqa0/HrAnGFw.png"
    let nick = "https://image.ibb.co/f5nsX0/nick.png"
    let pogoembed = new Discord.RichEmbed()
//     .setAuthor("Pogomix", nick)
//    // .setURL('https://soundcloud.com/pogomix/')
//     .setDescription(`Information on **POGO:**`)
    .setColor("RANDOM")
    .addField("<:nick:502697290532913152> Pogomix", "Information on **POGO:**")
    .addField('POGO Bio', `POGO is a YouTuber, musician, and most importantly an australian. He puts weird sounds into a blender and blasts them into a funky frappe for your earholes! He has been doing this on YouTube since Jun 7, 2007 (6/7/07), and has been making music as POGO since 2005. As of 10/17/18, he has over 211 MILLION views on YouTube alone with over 700k subs! Over a decade later He is still growing strong and inspiring new musicians.`)
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
	
	if (message.content.toLowerCase().startsWith(`${prefix}artistinfo`)) {		
    let sicon = message.guild.iconURL;
    let pogobunny = "https://image.ibb.co/eYf1QL/451822330801291294.png"
    let blujayembed = new Discord.RichEmbed()
    .setAuthor("Other C&S/Plunderphonic Artists!", pogobunny)
    //.setTitle("<:pogobunny:502698235845017611> Other C&S/Plunderphonic Artists!")
    .setURL('https://www.youtube.com/watch?v=TdcaqS5YUlM&index=1&list=PLLvtWLHvnsz3WfKOLkQiKQZBoM9EoRg_B')
    .setDescription(`Information on other artists who also do chopped and screwed vocals or plunderphonics as they are offically called, or pogo-like/pogo styled music. And I will be providing links the place they upload/used to upload often:`)
    .setColor("RANDOM")
    .addField('Blujaymix', `[I am a goofy goober who mixes with samples (/o3o)/](https://soundcloud.com/blujay55555)`, true)
    .addField('OneSimpleGamer', `[Video Editor and Music Creator](https://www.youtube.com/channel/UCjhrBvrgZI44KceWCAbqsfQ)`, true)
    .addField('Jeesh', `[I like to think I'm painting with sound but, that sounds far too pretentious](https://soundcloud.com/jeesh)`, true)
    .addField('Smuffy', `[Smuffy, AKA Joshua Smith: a music producer from Brisbane, Australia trying to figure out just how this strange industry works](https://soundcloud.com/smuffy)` , true)
    .addField('mrsimon', `[MUSIC and YTP from si mcclure](https://www.youtube.com/mrsimon34)`, true)
    .addField('MrAjaunte', `[Plunder-Music....Phonics....PLUNDERPHONICS](https://soundcloud.com/mrajaunte)`, true)
    .addField('Ben Storey', `[I like to fiddle around with sounds](https://www.youtube.com/user/OoFrenchyo/featured)`, true)
    .addField('DerpsMcPinapple', `[I like making music and memes I guess. Meme-Music](https://soundcloud.com/derpsmcpineapple)`, true)
    .addField('Avery Blue', `[Follow me on a musical adventure of learning and fun](https://www.youtube.com/channel/UCjN5hZ33RhSsOsZwkUS20Yw/featured)`, true)
    .addField('Joromix', `[Aesthetic™](https://soundcloud.com/joromixmusic)`, true)
    .addField('Ashley Chirnside', `[Ashley Chirnside](https://soundcloud.com/ashley-chirnside)`, true)
    .addField('@/AtlasGeneticist', `[I post here every once in a while and plan to release a lot more once I'm used to music making](https://soundcloud.com/somethingworks)`, true)
    .addField('Geshtro', `[Geshtro](https://soundcloud.com/geshtro)`, true)
    .addField('ThinkFishTank', `[Plunderphonics artist from Maine](https://soundcloud.com/thinkfishtank)`, true)
    .addField('efryo - MusicOfPlus', `[I'm fascinated by music and the different ways it can be put together](https://www.youtube.com/user/efryo/featured)`, true)
    .addField('liltommyj', `[If you like remixes of things then you should LEAVE IMMEDIATELY](https://www.youtube.com/user/liltommyj/featured)`, true)
    .addField('Mr. Heuer', `[I'm just some dude from Southern Indiana](https://www.youtube.com/user/MrHeuer1/featured)`, true)
    .addField('Julow', `[Julow (ex Jules Kennedvitch)](https://soundcloud.com/voodoorising)`, true)
    .addField('Jawka', `[Jawka](https://soundcloud.com/jawka)`, true)
    .addField('P.SUS', `[SoundCloud has limited upload space, so I will need to be taking songs down](https://soundcloud.com/p-sus)`, true)
    .addField('RemixLuke', `[My Pogo inspired music will be posted on this channel, stay tuned](https://soundcloud.com/remixluke)`, true)
    .addField('Clod B', `[I make music sometimes ◙▒◙♫♩♬](https://soundcloud.com/clod-b)`, true)
    .addField('SimmerTunes', `[Formerly known as ShowToonZ](https://soundcloud.com/simmertunes)`, true)
    .setFooter("If you would like more people you think should be added, contact me at Soldz (CF)#6819.", `${client.user.displayAvatarURL}`)
    .setThumbnail(sicon) 
    return message.channel.send(blujayembed);
}
	

    if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
	let server = message.guild.name;
	let helpembed = new Discord.RichEmbed()
	.setTitle(`🎶 ${server} Commands`)
	.setDescription(`The commands of ${server}:`)
	.setColor("RANDOM")
	.addField('<:pogo:502699144163360769> `p!pogoinfo`', "If you are a new fan, old fan, or someone who just wants to know about POGO, read it all in here.")
	.addField('💿 `p!artistinfo`', "Oh man, there are tons of other artists out there that do stuff like POGO so get on out there and support em! **WARNING**: Long list of people, beware.")
	.addField('🖼 `p!avatar`', "Displays the avatar/pfp (profile picture) of yourself or any user you mention.")
	.addField('🤖 `p!botinfo`', "Infomation on POGO bot.")
	.addField('❓ `p!info`', "Information on little things and facts about POGO.")
        .addField('<:DONK:502699143287013386> `p!remix`', "Surprises you with a random remix from a generated queue of over 100 remixes.") 
	.addField('🔌 `p!serverinfo`', `Infomation on ${server}.`)
	.addField('👩 `p!userinfo`', "Information on yourself and other users roles, status, tag, etc.") 
	.setTimestamp();
    return message.channel.send(helpembed);
message.react("🎧")
  }
		
			 if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) { 
      let player = message.mentions.members.first() || message.member
	   let user = player.user
if(!user) return message.channel.send("You haven't selected/mentioned a user whose avatar you want to see."); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, `${user.displayAvatarURL}`)
    .setTitle('Avatar')
    .setURL(user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setColor("RANDOM");
    return message.channel.send(avatarEmbed);
}
		
		  if (message.content.toLowerCase().startsWith(`${prefix}botinfo`)) {

    let bicon = client.user.displayAvatarURL;
    let pogoears = "https://image.ibb.co/eYf1QL/451822330801291294.png"
    let botembed = new Discord.RichEmbed()
    .setAuthor("PogoBot Information", pogoears)
    .setDescription(`Information on ${client.user.username}:`)
    .setColor("RANDOM")
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
    let sicon = message.guild.iconURL;
    let server = message.guild.name;
    let rolesize = message.guild.roles.size - 1;
    let realtotal = message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size;
    let serverembed = new Discord.RichEmbed()
    .setTitle("👑 Server Information")
    .setDescription(`Information on ${server}:`)
    .setColor("RANDOM") 
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
			                  const status = {
        false: "Human",
        true: "Bot"
      }
	    let args = message.content.split(/ +/g).slice(1) 
            let player = message.mentions.members.first() || message.guild.members.find(mem => mem.user.id === args[0]) || message.guild.members.find(mem => mem.user.tag === args[0]) || message.guild.members.find(mem => mem.user.username === args[0]) || message.member
            let iicon = player.user.displayAvatarURL;
            let roles = player.roles.map(role => role).slice(1).join(" ") || "None";
	    let user = player.user
	    let rolesize = player.roles.size - 1;
            let userEmbed = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .setColor('#2B547E')
            .addField('User ID', user.id, true)
            .addField('Current Tag', user.tag, true)
            .addField('Server Nickname', `${player.displayName}`, true) 
            .addField('Highest Member Role', `<@&${player.highestRole.id}>`, true)
            .addField(`Roles [${rolesize}]`, `${roles}`)
            .addField('Game/Playing', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'None'}`, true)
            .addField('Status', user.presence.status, true)
            .addField('Bot/Human', status[user.bot], true)
            .addField('Joined Server On:', `${moment2(player.joinedAt).format('LLLL')}` + '\n' + `${player.user.tag} joined` + ' ' + moment2(new Date()).diff(player.joinedAt, 'days') + ' days ago')
            .addField('Account Created On:', `${moment2(player.user.createdAt).format('LLLL')}`)
            .setThumbnail(iicon)
            .setTimestamp();
	return message.channel.send(userEmbed);
	}

 if (message.content.toLowerCase().startsWith(`${prefix}info`)) {
    let pogo = "https://image.ibb.co/kc8a8L/kpteGYu.png"	
    let pogonick = "https://image.ibb.co/bTtSzf/pogonick.png"
    let infoembed = new Discord.RichEmbed()
    .setAuthor("More Information About POGO", pogonick)
    .setDescription(`Fun Fact: POGO/Nick Bertke turned 30 years old in 2018!`)
    .setColor("RANDOM")
    .addField("Is Nick a Homophobic Bigot? ", `To answer the question straightforwardly, no. Pogo addresses this in detail in a video, that is now taken down, but Pewdiepie talks about this in a video and shows the video. I'd suggest watching this for more information on the subject: [YouTube.](https://youtu.be/_nChWc24ZM4?t=38)` , true)
    .addField("POGO's Real Name", "Christopher Nicholas Bertke.", true)
    .addField("Most Popular YouTube Video", "Over a decade ago POGO uploaded his famous Alice disney remix and today sits at 22M views!")
    .addField("Location: Australia", `Did you know that [Smuffy](https://soundcloud.com/smuffy) and POGO live in the same country? Crazy right?`)
    .addField("Unfinished Projects", `Some of POGO's most well known collabortains are with people like Jeesh ([The Trouble](https://www.youtube.com/watch?v=FRSr0GprIIw)) & John Sean ([Vision](https://www.youtube.com/watch?v=hpx-742y_IY)), but did you know he has started projects with other people and Jeesh that he never finished? There are many channels on youtube and soundcloud accounts that have these around. Such as [The Malorie Smith Collective](https://soundcloud.com/malorie-smith-148602862) (they have tons of original music, I suggest listening to them you won't regret it!), [Simply Not My Trackz](https://soundcloud.com/simplynotmytrackz), [Unreleased and Rare Pogo](https://www.youtube.com/channel/UCBLj4LEIBfeyszoXmMwZkAg) and many more! Go explore and find some.`) 
    .addField("Behind The Logo", `Have you ever wondered why POGO's logo is a bunny head? Well on a stream that is now down when someone asked about it he said something on the lines of "I was dating a girl and I asked her to draw me something for my channel and she came up with that."`)
    .addField("The Visa, The US, and The POGO", "As many fans know, pogo was banned from the US after an incident with his visa back in 2011 and was put on a 10 year ban from coming back which is thankfully over in 2021 and he will be allowed to return to the USA. The old video of him explaining this is most likely gone for some reason not sure why. He even spent 3 weeks in prison, which he talks about that and the visa thing [here.](https://youtu.be/PErGN3QuE34?t=7708)")
    .addField("POGO's Sub Count", `Back in 2011, POGO used to have over 1.5 million subs (which explains why in some videos you can see a 1M Play Button) before the visa issue that got him to lose over 70-74% of his subs at the time. Leaving him at around 430-450k subs after he got released, and you couldn't subscribe to him either at the time.`) 
    .addField("POGO Tips", "Want some advice on how to start out on making music? [Pogo Tips.](https://www.youtube.com/watch?v=nSlBiBu6-fs)")
    .addField("POGO's Politics", "Did you know that Pogo has a political opinion?! There are many videos, but this is one of the [*favorites.*](https://youtu.be/PErGN3QuE34?t=4695)")
    .setFooter("Fun Fact: This bot used to be an upload informer for the creator.", `${client.user.displayAvatarURL}`)
    .setThumbnail(pogo)      
    .setTimestamp();
    return message.channel.send(infoembed);
  }  
	
    if (message.content.toLowerCase().startsWith(`${prefix}remix`)) {
let remixes = ["https://www.youtube.com/watch?v=vPrnQP-q3dc", "https://www.youtube.com/watch?v=oXjKfTjy7wA", "https://www.youtube.com/watch?v=--8oywtLG2I", "https://www.youtube.com/watch?v=mGEcMWyeSVk", "https://www.youtube.com/watch?v=8sX2vxwU7Vg", "https://www.youtube.com/watch?v=Y_RGCHos63I", "https://www.youtube.com/watch?v=tnlhWwRagAg", "https://www.youtube.com/watch?v=2L6POqtJ_Bk", "https://www.youtube.com/watch?v=lryVSUuAPyI", "https://www.youtube.com/watch?v=d6Ipsoz9w_I", "https://www.youtube.com/watch?v=e9X6D_5erLU", "https://www.youtube.com/watch?v=erb9aNcX0IU", "https://www.youtube.com/watch?v=G8pptpmkHXg&t=2s", "https://www.youtube.com/watch?v=_DvWP9hzEsc", "https://www.youtube.com/watch?v=lvgRO_ZntEI", "https://www.youtube.com/watch?v=5hOlNNznVwo", "https://www.youtube.com/watch?v=QaUmJdJ354w", "https://www.youtube.com/watch?v=4MbFSVzUI5I", "https://www.youtube.com/watch?v=073ZVf72Bj0", "https://www.youtube.com/watch?v=JPizGlTuBfk", "https://www.youtube.com/watch?v=GqDzYpzNiMI", "https://www.youtube.com/watch?v=6fCvJ1mTjqo", "https://www.youtube.com/watch?v=ewy3uXVLekA", "https://www.youtube.com/watch?v=qlEjC2ctb40", "https://www.youtube.com/watch?v=DkUmHT_wrsg", "https://www.youtube.com/watch?v=fDgSSMemnDk", "https://www.youtube.com/watch?v=6fGRj38N8bI&t=2s", "https://www.youtube.com/watch?v=fvOuWUKaszI", "https://www.youtube.com/watch?v=LG5saoOpsno", "https://www.youtube.com/watch?v=_YOYk9niqDI", "https://www.youtube.com/watch?v=fWJGNXoskVg", "https://www.youtube.com/watch?v=kD7GtZwweDk", "https://www.youtube.com/watch?v=1N65XUBJh8Y", "https://www.youtube.com/watch?v=JXcBHpeMBaQ", "https://www.youtube.com/watch?v=TUhCrPjOqe8&t=1s", "https://www.youtube.com/watch?v=_VHrh3R5p7U", "https://www.youtube.com/watch?v=kzDsODNcAOw", "https://www.youtube.com/watch?v=QUVn1flY0AA", "https://www.youtube.com/watch?v=hWe5sEkaCEU", "https://www.youtube.com/watch?v=JZXURBRGakM", "https://www.youtube.com/watch?v=ITtNW44QAAI", "https://www.youtube.com/watch?v=AZn6c4CeJCc", "https://www.youtube.com/watch?v=MvfkyURi89A", "https://www.youtube.com/watch?v=Q_Co7er4Vuk", "https://www.youtube.com/watch?v=PW5_GNG7q2w", "https://www.youtube.com/watch?v=5Xid6tLTg3c", "https://www.youtube.com/watch?v=lLJYLtz3Usw", "https://www.youtube.com/watch?v=xJ4-vj4zBcw", "https://www.youtube.com/watch?v=dDGfCt6m76w", "https://www.youtube.com/watch?v=yJ_DVIRUSyc&t=1s", "https://www.youtube.com/watch?v=BN90rckRV5Q", "https://www.youtube.com/watch?v=k4qJ1gbzUwQ", "https://www.youtube.com/watch?v=y8Eap60iY9c", "https://www.youtube.com/watch?v=11cSTaN16vI", "https://www.youtube.com/watch?v=nwU6zQc-Bv4&", "https://www.youtube.com/watch?v=CxqAKoCCWr4", "https://www.youtube.com/watch?v=SPbijgSYe_4", "https://www.youtube.com/watch?v=LzDh3Fs4ezU", "https://www.youtube.com/watch?v=VEc6sFOfSfw", "https://www.youtube.com/watch?v=32cnJhNh-Yo", "https://www.youtube.com/watch?v=Oe-X-Or36iI", "https://www.youtube.com/watch?v=DqDbBej2unk", "https://www.youtube.com/watch?v=OSmp2a6UsLg", "https://www.youtube.com/watch?v=nwU6zQc-Bv4", "https://soundcloud.com/blujay55555/a-h-h", "https://soundcloud.com/blujay55555/skylight", "https://soundcloud.com/derpsmcpineapple/pink-guy-asian-pizza-derpsmcpineapple-remix", "https://soundcloud.com/derpsmcpineapple/weightless-pogo-mashup", "https://soundcloud.com/farliechales/my-neighbor", "https://soundcloud.com/farliechales/fallonism", "https://soundcloud.com/voodoorising/blue-words", "https://soundcloud.com/voodoorising/my-world-alternate-2018-version", "https://soundcloud.com/p-sus/goodnight-cody-i-met-a-whale-psus-re-arrange", "https://soundcloud.com/p-sus/by-my-side", "https://soundcloud.com/ashley-chirnside/beautiful-night", "https://soundcloud.com/ashley-chirnside/magical-food", "https://soundcloud.com/musicofplus/kininarimasu", "https://soundcloud.com/simplynotmytrackz/its-jaaam-time-pogos-eleven-jaaam-but-simply-a-mashup-by-me", "https://soundcloud.com/simplynotmytrackz/cigars-cystal-meth", "https://www.youtube.com/watch?v=9PsedAXnEUo", "https://soundcloud.com/himynameiseugene/it-efryo-remix", "https://www.youtube.com/watch?v=hY8jmmUT1t4", "https://soundcloud.com/mrajaunte/the-polar-express-remix-wish-upon-a-star-mix", "https://soundcloud.com/mrajaunte/sugar-rush-mrajaunte", "https://soundcloud.com/mrajaunte/rag-tag-mrajaunte", "https://www.youtube.com/watch?v=vGrMQhowWIQ", "https://www.youtube.com/watch?v=Lc4s7okd9UQ", "https://www.youtube.com/watch?v=GFwwUaDpBhE", "https://www.youtube.com/watch?v=uN6g8JxVzXw", "https://www.youtube.com/watch?v=hU95tRlo8do&t", "https://www.youtube.com/watch?v=UBMIE0bhH5c", "https://www.youtube.com/watch?v=_e-bxdaleSg", "https://www.youtube.com/watch?v=nwRxpWjSVzc", "https://www.youtube.com/watch?v=XK1ysRZ8Wis", "https://www.youtube.com/watch?v=SqyPiowOSN8", "https://youtu.be/aZlmyCmaJ2k", "https://www.youtube.com/watch?v=eYBC5y5qbDY", "https://www.youtube.com/watch?v=xCKRI_3q13Q", "https://www.youtube.com/watch?v=QCPJajxWB3E", "https://www.youtube.com/watch?v=lEniNLf4SDg", "https://www.youtube.com/watch?v=XQRbZQ75v7o", "https://www.youtube.com/watch?v=0F5A-p2enH8"];
let result = Math.floor((Math.random() * remixes.length)); 
	let randomembed = new Discord.RichEmbed() 
               // .setTitle(`🎧 Random Remix`)
              // .setDescription(replies[result])
              //  .setColor("RANDOM")
	     //   .setImage();
	return message.channel.send(remixes[result]);
	}
		if (message.content.toLowerCase().startsWith(`${prefix}testremix`)) {
let remixes = ["https://www.youtube.com/watch?v=vPrnQP-q3dc", "https://www.youtube.com/watch?v=oXjKfTjy7wA", "https://www.youtube.com/watch?v=--8oywtLG2I", "https://www.youtube.com/watch?v=mGEcMWyeSVk", "https://www.youtube.com/watch?v=8sX2vxwU7Vg", "https://www.youtube.com/watch?v=Y_RGCHos63I", "https://www.youtube.com/watch?v=tnlhWwRagAg", "https://www.youtube.com/watch?v=2L6POqtJ_Bk", "https://www.youtube.com/watch?v=lryVSUuAPyI", "https://www.youtube.com/watch?v=d6Ipsoz9w_I", "https://www.youtube.com/watch?v=e9X6D_5erLU", "https://www.youtube.com/watch?v=erb9aNcX0IU", "https://www.youtube.com/watch?v=G8pptpmkHXg&t=2s", "https://www.youtube.com/watch?v=_DvWP9hzEsc", "https://www.youtube.com/watch?v=lvgRO_ZntEI", "https://www.youtube.com/watch?v=5hOlNNznVwo", "https://www.youtube.com/watch?v=QaUmJdJ354w", "https://www.youtube.com/watch?v=4MbFSVzUI5I", "https://www.youtube.com/watch?v=073ZVf72Bj0", "https://www.youtube.com/watch?v=JPizGlTuBfk", "https://www.youtube.com/watch?v=GqDzYpzNiMI", "https://www.youtube.com/watch?v=6fCvJ1mTjqo", "https://www.youtube.com/watch?v=ewy3uXVLekA", "https://www.youtube.com/watch?v=qlEjC2ctb40", "https://www.youtube.com/watch?v=DkUmHT_wrsg", "https://www.youtube.com/watch?v=fDgSSMemnDk", "https://www.youtube.com/watch?v=6fGRj38N8bI&t=2s", "https://www.youtube.com/watch?v=fvOuWUKaszI", "https://www.youtube.com/watch?v=LG5saoOpsno", "https://www.youtube.com/watch?v=_YOYk9niqDI", "https://www.youtube.com/watch?v=fWJGNXoskVg", "https://www.youtube.com/watch?v=kD7GtZwweDk", "https://www.youtube.com/watch?v=1N65XUBJh8Y", "https://www.youtube.com/watch?v=JXcBHpeMBaQ", "https://www.youtube.com/watch?v=TUhCrPjOqe8&t=1s", "https://www.youtube.com/watch?v=_VHrh3R5p7U", "https://www.youtube.com/watch?v=kzDsODNcAOw", "https://www.youtube.com/watch?v=QUVn1flY0AA", "https://www.youtube.com/watch?v=hWe5sEkaCEU", "https://www.youtube.com/watch?v=JZXURBRGakM", "https://www.youtube.com/watch?v=ITtNW44QAAI", "https://www.youtube.com/watch?v=AZn6c4CeJCc", "https://www.youtube.com/watch?v=MvfkyURi89A", "https://www.youtube.com/watch?v=Q_Co7er4Vuk", "https://www.youtube.com/watch?v=PW5_GNG7q2w", "https://www.youtube.com/watch?v=5Xid6tLTg3c", "https://www.youtube.com/watch?v=lLJYLtz3Usw", "https://www.youtube.com/watch?v=xJ4-vj4zBcw", "https://www.youtube.com/watch?v=dDGfCt6m76w", "https://www.youtube.com/watch?v=yJ_DVIRUSyc&t=1s", "https://www.youtube.com/watch?v=BN90rckRV5Q", "https://www.youtube.com/watch?v=k4qJ1gbzUwQ", "https://www.youtube.com/watch?v=y8Eap60iY9c", "https://www.youtube.com/watch?v=11cSTaN16vI", "https://www.youtube.com/watch?v=nwU6zQc-Bv4&", "https://www.youtube.com/watch?v=CxqAKoCCWr4", "https://www.youtube.com/watch?v=SPbijgSYe_4"];
let result = Math.floor((Math.random() * remixes.length));
	let randomembed = new Discord.RichEmbed() 
                .set(`🎧 Random Remix`)
               .setDescription(remixes[result])
                .setColor("RANDOM")
	        .setImage();
	return message.channel.send(randomembed);
   }
});

client.on('guildMemberAdd', member => {  
  let user = member.user.tag;
  let guild = member.guild;
  let server = member.guild.name;
  let realtotal = guild.memberCount - guild.members.filter(m => m.user.bot).size;
  let newmember = [`Welcome ${user}. Leave your weapons by the door.`, `${user} just joined. Everyone, look busy!`, `Ermagherd. ${user} is here.`, `Welcome, ${user}. We hope you brought pizza.`, `${user} has joined the server! It's super effective!`, `Never gonna give ${user} up. Never gonna let ${user} down.`, `Hello. Is it ${user} you're looking for?`, `${user} slid into the server.`, `Brace yourselves. ${user} just joined the server.`, `Where's ${user}? In the server!`, `${user} joined. You must construct additional pylons.`, `${user} hopped into the server. Kangaroo!!`, `Welcome, ${user}. We were expecting you ( ͡° ͜ʖ ͡°)`, `${user} just joined the server - glhf!`, `${user} just showed up. Hold my beer.`, `${user} has arrived. Party's over.`, `Challenger approaching - ${user} has appeared!`, `It's ${user}! Praise the sun! \[T]/`, `It's dangerous to go alone, take ${user}!`, `It's a bird! It's a plane! Nevermind, it's just ${user}`, `${user} is here to kick butt and chew bubblegum. And ${user} is all out of gum.`, `Cheers, love! ${user}'s here!`, `A ${user} has spawned in the server.`, `Wild turkey! ${user} go and catch it!`]
  let result = Math.floor((Math.random() * newmember.length)); 
  let newcomer = guild.channels.find(c => c.name === 'newcomers');
  let embed = new Discord.RichEmbed()
      .setColor()
      .setDescription(newmember[result])
     // .setFooter(`There are now ${realtotal} humans in the server.`, client.user.displayAvatarURL)
      .setTimestamp();
  newcomer.send(embed);
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
