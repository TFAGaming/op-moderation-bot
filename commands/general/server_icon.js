const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'servericon',
    aliases: [],
    utilisation: '{prefix}servericon',

    execute(client, message, args) {
      
      const embed = new Discord.MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setColor("BLURPLE")
        .setTitle(`Here is ${message.guild.name}'s Server Icon!`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
        .setTimestamp();

      message.reply({embeds: [embed]});
          
    },
};