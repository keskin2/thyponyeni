const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('⭕**Çıkma Teklif Edeceğin Kişiyi Seçmelisin **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()

    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Sana Birisi Çıkma Teklifi Etti <a:panda:812280345759580180> ')
    .addField('Sana ÇOK AŞIK', `Hadi Kabul Et Bence <a:kalprgb:812969555009863690>  `)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Çıkma Teklifi Thypon BOT')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin ✔️')
    .setFooter('Çıkma Teklifi |Thypon BOT')
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};