const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:752305324588793896> **Keskin BOT Premium Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
	   .setDescription(`
   **» ${prefix}reklamlog ** 🔥 Reklam engel logunu ayarlarsınız.
   **» ${prefix}küfürlog ** 🔥 Küfür engel logunu ayarlarsınız.
   **» ${prefix}rol ** 🔥 Ayarlamalı rol alma/verme sistemidir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Keskin BOT Bağlantıları`, ` <a:alev:752289999642296370> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=696458462187618315&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](http://bit.ly/Quinoy) **|** <a:alev:752289999642296370>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'premiumsistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};