const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 
  
if(message.author.id !== '757961207452925973') if(message.author.id !== '757961207452925973')
    
      return;
  

 const args0 = args[0];
  if(!args0) {
    message.channel.send("❌ Sunucu **ID** yazmalısın!")
  } else {
  
db.set(`premod_${args0}`, "aktif")
  message.channel.send("🎉 YEY Başarıyla premium verildi.")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumver',
    description: '',
    usage: '',

}