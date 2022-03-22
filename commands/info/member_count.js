const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'membercount',
    aliases: ["memberscount", "membersc", "memberc"],
    utilisation: '{prefix}membercount',

    execute(client, message, args) {
      
      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(message.guild.name + " - Member Count:")
        .setDescription(`There are **${message.guild.memberCount} Members** on this server!`)
        .setTimestamp()
        .setColor("GREEN");

      message.reply({ embeds: [embed] })
          
    },
};