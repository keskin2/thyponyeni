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
       .setTitle(` **Keskin BOT Moderasyon Menüsüne Hoşgeldiniz** `)
        .setDescription(`<a:YanpSnennleGif:753288587629297735> k!moderasyon2 Menümüze Bakmayı Unutmayın. 
  <:guvenlik:812055730885754940> **» k!giriş-çıkış-ayarla **  Resimli Hg-BB sistemini Açarsınız.
  <:guvenlik:812055730885754940> **» k!giriş-çıkış-kapat **  Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  <:guvenlik:812055730885754940> **» k!güvenlik **  Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  <:guvenlik:812055730885754940> **» k!güvenlik sıfırla **  Resimli Güvenlik Sistemini Kapatırsınız.
  <:guvenlik:812055730885754940> **» k!capslock-engelleme **  CapsLock Engelleme Sistemini Açıp Kapatırsınız (İlk Yazışta Açar 2.de kapar)
  <:guvenlik:812055730885754940> **» k!küfürengel**  Küfür Sistemini Açar/Kapatırsınız.
  <:guvenlik:812055730885754940> **» k!reklamengel**  Reklam Engel Sistemini Açar/Kapatırsınız.
  <:guvenlik:812055730885754940> **» k!temizle **  Belirlenen Miktarda Mesaj Siler.
  <:guvenlik:812055730885754940> **» k!sunucupanel **  Sunucu Panel Açar.
  <:guvenlik:812055730885754940> **» k!unban ** İdsi Girelen Kullanıcıyı Banının Açar.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  k!davet __Botu Davet Edebilirsiniz!__**
**»  k!sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  k!istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  k!prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  k!prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://media.giphy.com/media/FFvqNkbdCMy7Ka1Vqs/giphy.gif`)
                .addField(`» Keskin BOT Bağlantıları`, ` <:bit:752289999642296370> [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=803169298901368852&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/J4Fb2Qmy) **|** [Oy Linki](Link) **|** <:bit:752289999642296370>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};