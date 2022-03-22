const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'uptime',
    aliases: ["up"],
    utilisation: '{prefix}uptime',

    execute(client, message, args) {
      
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Here is my Uptime!")
        .addFields(
          { name: "• Days:", value: `${days}`, inline: true },
          { name: "• Hours:", value: `${hours}`, inline: true },
          { name: "• Minutes:", value: `${minutes}`, inline: true },
          { name: "• Seconds:", value: `${seconds}`, inline: true },
        )
        .setColor("GREEN")
        .setTimestamp();
      
      return message.reply({ embeds: [embed] })
          
    },
};