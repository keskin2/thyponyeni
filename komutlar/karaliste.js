const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "757961207452925973") if(message.author.id !== "757961207452925973") return message.channel.send("<:ortaparmak:808256134392840243> Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("<:ortaparmak:808256134392840243> Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send("<:ortaparmak:808256134392840243> Bir sebep belirtmelisin!")

message.channel.send("<:ortaparmak:808256134392840243> **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const westra = new Discord.MessageEmbed()
.setColor(`RED`)
.setTimestamp()
.setDescription(`<:ortaparmak:808256134392840243> **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("812617881992167424").send(westra)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'karaliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
