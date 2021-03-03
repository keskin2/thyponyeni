const westra = require('discord.js')
const westraclient = new westra.Client()
const westraembed = new westra.MessageEmbed()
.setColor("RANDOM")
.setDescription(` <a:elmas:809469732624793650> Selam!\n **Thypon** Botu Ekleyerek Bize Destek Sağlayabilirsiniz.\nBotu Eklemek İçin [BURAYA](https://discord.com/api/oauth2/authorize?client_id=803169298901368852&permissions=8&scope=bot) Tıkla!`)
.setFooter(`${message.author.username} Tarafından İstendi.`)     
exports.run = async (westraclient, message, args) => {
	message.channel.send(westraembed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davetet"],
    permLevel: 0,
}
exports.help = {
    name: 'davet',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}