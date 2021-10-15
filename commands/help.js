const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RANDOM')
  .addField('Vexy Music Bot | Müzik Komutları',`

  **${config.prefix}play <müzikismi>**: İstenilen Şarkıyı Çalar.
  **${config.prefix}stop**: Anlık Çalınan Şarkıyı Durdurur.
  **${config.prefix}resume**: Durdurulan Şarkıyı Devam Ettirir.
  **${config.prefix}loop**: Şarkıyı tekrardan oynatır.
  **${config.prefix}skip**: Listede Başka Şarkı Var İse O Şarkılara Geçer.
  **${config.prefix}dc**: Botun Sesten Çıkmasını Sağlar.
  **${config.prefix}np**: Anlık Olarak Çalınan Şarkıyı Gösterir.
  **${config.prefix}list**: Şarkı Listesini Gösterir.
  **${config.prefix}mix**: Listede Arka Sıraya Atılmış Şarkıları Karıştırır.
  **${config.prefix}ping**: Botun Gecikme Süresini Gösterir.
  
  **Sunucunuza eklemek isterseniz:** [Davet Linki](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)
  
  **Yapımcılarım** <@852744506586693683> 🌐 <@852790966250504193>
       
  `)
  

   
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .setThumbnail("https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif")
  .setImage("https://i.hizliresim.com/dw6nz7e.gif") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim','helps'],
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'
};