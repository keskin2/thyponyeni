const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice'); 
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size; 
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size; 
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  devtr_kod = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
    const devtr  = new Discord.MessageEmbed()
        .setColor("RED")
       // .setThumbnail(`https://cdn.discordapp.com/attachments/616938010725974029/735472467782533200/Baslksz-1re3.gif`)       
        .addField(` <a:bt:810112130929524737>  **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`) 
        .addField(` <a:bt:810112130929524737>  **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${devtr_kod}\`\`\`**`) 
        .addField(`<a:bt:810112130929524737>  **Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`) 
        .addField(` <a:bt:810112130929524737>  **Yazı Kanalları**`, `» **${textChannels}**`) 
        .addField(` <a:bt:810112130929524737>  **Ses Kanalları**`, `» **${voiceChannels.size}**`) 
        .addField(` <a:bt:810112130929524737>  **Kullanıcılar**`, ` Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true) 
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`) 
        .setFooter(`Quin`, client.user.avatarURL()) 
    message.channel.send(devtr); 


} 
                                                             



exports.conf = {
    enabled: true,                                                                        
    guildOnly: false, 
    aliases: [], 
    permLevel: 0                                     
}; 



exports.help = {
    name: 'say', 
    description: 'Say', 
    usage: 'say'
} 