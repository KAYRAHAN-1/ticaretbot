const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠ Uyarı ⚠', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor("#15f153")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Sunucunun Üye sayısı:', message.guild.memberCount)
    .addField('Sunucu Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Sunucunun Oluşturulma tarihi:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL);
    return message.channel.sendEmbed(sunucubilgi);
    }
	message.react("😂")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};