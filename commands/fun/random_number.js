const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
    name: 'randomnumber',
    aliases: ["randomn", "random_n"],
    utilisation: '{prefix}randomnumber',

    execute(client, message, args) {

      const randomNumber = Math.floor((Math.random() * 100) + 1);

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`**Done!** Successfully Generated a Random Number.`)
        .addFields(
          { name: "• Number:", value: `${randomNumber}` }
        )
        .setColor("BLURPLE")
        .setFooter(`You can generate other random numbers by using: ${prefix}randomnumber`)

      message.reply({ embeds: [embed]})
          
    },
};