const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('803169298901368852') 

exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_{message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`Thypon BOT `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:tadas:812332337705648138> **Thypon BOT  Eğlence Menüsüne Hoşgeldiniz** <a:tadas:812332337705648138>`)
        .setDescription(`
 
        <a:rgb:812332081295130666>  **t!çıkma-teklif-et** <a:bt:810112130929524737> Etiketlediğiniz Kişiye Çıkma Teklif Edersiniz. 
        <a:rgb:812332081295130666> **t!yumruk-at** <a:bt:810112130929524737> Etiketlediğiniz Kişiye Yumruk Atarsınız.
        <a:rgb:812332081295130666> **t!tersyazı** <a:bt:810112130929524737> Yazdığınız Yazıyı Tersine Çevirir.
        <a:rgb:812332081295130666>  **t!sarıl** <a:bt:810112130929524737> Etiketlediğiniz Kişiye Sarılırsınız.
        <a:rgb:812332081295130666> **t!kralol** <a:bt:810112130929524737> Kral Olursunuz.
        <a:rgb:812332081295130666> **t!fbi** <a:bt:810112130929524737> FBI Gif Atar
        <a:rgb:812332081295130666> **t!espri** <a:bt:810112130929524737> Rastgele Espri Atar.
        <a:rgb:812332081295130666> **t!elyazısı** <a:bt:810112130929524737> Yazdığınız Yazıyı El Yazısına Çevirir.
        <a:rgb:812332081295130666> **t!doğrulukcesaret** <a:bt:810112130929524737> Doğruluk Veya Cesaret Cümlesi Atar.
        <a:rgb:812332081295130666> **t!banner** <a:bt:810112130929524737> Yazdığınız YAZIYI Bannera Çevirir.
        <a:rgb:812332081295130666> **t!aşkölçer** <a:bt:810112130929524737> Etiketlediğiniz Kişiyle Aranızdaki Aşkı Ölçer. 
        <a:rgb:812332081295130666> **t!bg** <a:bt:810112130929524737> Bilek Güreşi Oynarsınız
        <a:rgb:812332081295130666> **t!1vs1** <a:bt:810112130929524737> Düello Oynarsınız
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  t!davet __Botu Davet Edebilirsiniz!__**
**»  t!sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  t!istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  t!prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Thypon Bot Bağlantıları`, ` <a:rgbadam:812332160476381185> [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=803169298901368852&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/zJsHkj6Dp2) **|** [Oy Linki](yok) **|** <a:rgbadam:812332160476381185>`)
        .setFooter( message.author.displayAvatarURL({dynamic: true}))
        .setFooter(`${message.author.username} Tarafından İstendi.`)     
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'a!davet-sistemi Menüsü',
  usage: 'eğlence'
};