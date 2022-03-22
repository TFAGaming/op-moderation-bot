const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'troll',
    aliases: [],
    utilisation: '{prefix}troll',

    execute(client, message, args) {

      const embed = new MessageEmbed()
        .setDescription(`You can copy the troll face below.\`\`\`
      
▒▒▒▄▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄ 
▒▒█▒░░░░▄▄▄▄▀░░░░░▒▀▀▄▄▄▒▒█ 
▒█▒░░░░░▄▀▀▄▄░░░░▒▄▄▄▒▒▒▒▒▒█ 
█▒▀▄▄▒░░██▄▄▄█░░▒██▄▄█▒▒▒▒▒▒█ 
█▒▒░▄▀▄▄▄▀░░░░░░▒▒█▒▒▒▒▒▒▒▒█ 
█▒░░█▄▄░░░░░█▀░░░░▀▄▒▒▄▀▀▀▄█ 
█▒░░▀█▄█▀▀▄░▀▀▀▀▄▄▄▀▒▒▒█▒▒█ 
▒█▒░░░▀█▄▄█▀▀▀█▀▀▀█▀█▀██▒▒█ 
▒▒█▒░░░░▀██▄▄▄█▄▄▄█▄██▒▒▒▒█▄ 
▒▒▒█▒░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒█ 
▒▒▒▒▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀▀
      \`\`\``);

      message.reply({ embeds: [embed] }) 
          
    },
};