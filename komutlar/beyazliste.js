const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "757961207452925973") if(message.author.id !== "757961207452925973") return message.channel.send("❌ Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("❌ Bir kullanıcı belirtmelisin!")

message.channel.send("✔️ **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setTimestamp()
.setDescription(`✔️ **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("808730833606672395").send(westra)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
