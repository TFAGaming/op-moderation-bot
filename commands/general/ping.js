const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message, args) {
      
        const start = Date.now();
          
            const embed = new MessageEmbed()
              
                .setColor('GREEN')
                .setTitle(client.user.username + " - Pong!")
                .setThumbnail(client.user.displayAvatarURL())
                .addField(`• Message Ping:`, `\`${Date.now() - start}ms\` 🛰️`)
                .addField(`• Message Latency:`, `\`${message.createdTimestamp - start}ms\` 🛰️`)
                .addField(`• API Latency:`, `\`${Math.round(client.ws.ping)}ms\` 🛰️`)
                .setTimestamp()
                .setFooter({ text: `Requested By: ${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true }) });
          
            message.reply({ embeds: [embed] });
          
    },
};