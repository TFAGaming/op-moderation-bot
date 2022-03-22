const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
    name: 'randomcolor',
    aliases: ["randomc", "random_c"],
    utilisation: '{prefix}randomcolor',

    execute(client, message, args) {
      
      const randomColor = Math.floor(Math.random()*16777215).toString(16);

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`**Done!** Successfully Generated a Random Color.`)
        .addFields(
          { name: "• Hex:", value: `#${randomColor}` }
        )
        .setColor(randomColor)
        .setFooter(`You can generate other random colors by using: ${prefix}randomcolor`)

      message.reply({ embeds: [embed]})
          
    },
};