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
       .setTitle(`<a:ykleniyor:752305324588793896> **Quin Bot Moderasyon Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`
  **» k!mod-log** <a:sagok:749305875188940983> Mod-Log Kanalını Belirlersiniz.
  **» k!mod-log kapat** <a:sagok:749305875188940983> Ayarlanan Mod-Log Kanalı Kapatılır.
  **» k!oylama ** <a:sagok:749305875188940983> Oylama Yaparsınız
  **» k!yasaklı-tag ** <a:sagok:749305875188940983> Yasaklı Tag Ayarlar.
  **» k!otorol-ayarla** <a:sagok:749305875188940983> Otorol Ayarlar.
  **» k!otorol-mesaj** <a:sagok:749305875188940983> Otorol Mesajı Ayarlar.
  **» k!otorol-sıfırla** <a:sagok:749305875188940983> Otorol Sıfırlar.
  **» k!sayaç-ayarla** <a:sagok:749305875188940983> Sayaç Ayarlar.
  **» k!ban ** <a:sagok:749305875188940983> Etiketlenen Kullanıcıyı Banlar.
  **» k!kick ** <a:sagok:749305875188940983> Etiketlenen Kullanıcıyı Kickler.
  **» k!sa-as aç ** <a:sagok:749305875188940983> SA-AS Sistemini Açar.
  **» k!sa-as kapat ** <a:sagok:749305875188940983> SA-AS Sistemini Kapatır.
  **» k!emoji-ekle ** <a:sagok:749305875188940983> Emoji Ekler.
  **» k!çekiliş ** <a:sagok:749305875188940983> Çekiliş yaparsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  k!davet __Botu Davet Edebilirsiniz!__**
**»  k!sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  k!istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  k!prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  k!prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Quin Bot Bağlantıları`, ` <a:alev:752289999642296370> [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=696458462187618315&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](http://bit.ly/Quinoy) **|** <a:alev:752289999642296370>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};