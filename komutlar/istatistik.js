const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(`Bot Sahibi`, `<@757961207452925973>`, true)
.addField(`Bot Geliştiricisi`, `<@757961207452925973>`, true)
    .addField("<:indirme:794690225108287508>Bellek Kullanımı<:indirme:794690225108287508>", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("<:Liste:794690225137123328>Sunucu Sayısı<:Liste:794690225137123328>", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("<:ktap:812970418780241990>Toplam Kullanıcı Sayısı<:ktap:812970418780241990>", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("<a:elmas:815540633971720232>Kanal Sayısı<a:elmas:815540633971720232>", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField(`<a:online:730102917864095774>Ne Kadar Süredir Aktif<a:online:730102917864095774>`, `${duration}`, true)
  .addField("<a:loading:730102926042988594>Ping<a:loading:730102926042988594>", `${client.ws.ping}`, true)
  .addField("<a:alert:730102923261902878>Discord.js Sürümü<a:alert:730102923261902878>", `${Discord.version}`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=803169298901368852&permissions=8&scope=bot)`, true)
  .addField(`Bota Oy Ver`, `[Tıkla](Yok)`, true)
  .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};