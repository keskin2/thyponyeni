const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` <a:yukleme:810111973474959401> **Thyphon BOT Yardım Menüsüne Hoşgeldiniz** <a:yukleme:810111973474959401> `)
        .setDescription(`
  **» <a:bt:810112130929524737> k!premium-sistemi** \<a:rainbowok:794869466768080896> Premium Komutlarını Gösterir.	 
  **» <a:bt:810112130929524737> k!ekonomi** \<a:rainbowok:794869466768080896> Ekonomi Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!gif-menü ** \<a:rainbowok:794869466768080896> Gif Komutlarını Gosterir.
  **» <a:bt:810112130929524737> k!moderasyon** \<a:rainbowok:794869466768080896> Moderasyon Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!moderasyon2** \<a:rainbowok:794869466768080896> 2. Moderasyon Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!kullanıcı** \<a:rainbowok:794869466768080896> Kullanıcı Komutlarıni Gösterir.
  **» <a:bt:810112130929524737> k!eğlence ** \<a:rainbowok:794869466768080896> Eğlence Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!seviye-yardım ** \<a:rainbowok:794869466768080896> Seviye Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!kayıt-sistemi** \<a:rainbowok:794869466768080896> Kayıt Komutlarını Gösterir.
  **» <a:bt:810112130929524737> k!koruma-yardım** \<a:rainbowok:794869466768080896> Koruma Komutlarını Gösterir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

***Nitrosuz Hareketli Emoji Kullanma Sistemi Sizlerle!***
Komutlar;

minnos 
ateş
elmas
havalı
hehe 
cool 
kalp
minecraft

***Deneyin Ve Görün Ama Büyük Küçük Harflere Dikkat Edin!***

**»  k!davet __Botu Davet Edebilirsiniz!__**
**»  k!sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  k!istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  k!prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  k!prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
        .addField(`» <a:Url:794690993218912256> Thyphon BOT Bağlantıları <a:Url:794690993218912256>`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=803169298901368852&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/zJsHkj6Dp2) **|** [Oy Linki](Yok) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};