const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    Thypon => Thypon.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      "<a:bt:810112130929524737> **Emoji ismi yazmalısın** <a:bt:810112130929524737>"
    );
  const Thypon = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("<a:eglence:809115204607541278> Emojinin ismi", `${emojiname}`)
    .addField("<a:eglence:809115204607541278> Emoji ID", `${emoji.id}`)
    .addField("<a:eglence:809115204607541278> Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(Thypon);
  console.log(Thypon);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-info"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "",
  usage: ""
};