const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ship',
    aliases: ["love"],
    utilisation: '{prefix}ship',

    execute(client, message, args) {

      const person = message.mentions.members.first();

      const embed1 = new MessageEmbed()
        .setDescription("Please mention a user.")
        .setColor("RED");

      if(!person) return message.reply({ embeds: [embed1] });
        
      const embed2 = new MessageEmbed()
        .setDescription("You can't ship yourself.")
        .setColor("RED");

      if(person === message.author) return message.reply({ embeds: [embed2] });

      const random = Math.floor((Math.random() * 99) + 1);

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(`How much do you love that user?`)
        .setDescription(`${message.author} x ${person}\n**Total Love:** \`${random}%\``)
        .setThumbnail("https://media.discordapp.net/attachments/949032755184943144/955459995984613416/5e6f44dbd3a71_thumb900.webp?width=492&height=492")
        .setTimestamp()
        .setColor("RED");

      message.reply({ embeds: [embed] })

          
    },
};