const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'meme',
    aliases: [],
    utilisation: '{prefix}meme',

    execute(client, message, args) {

      const num = Math.floor(Math.random() * (500 - 1) + 1);

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setImage(`https://ctk-api.herokuapp.com/meme/${num}`)
        .setColor("RANDOM");

      message.reply({ embeds: [embed] });
          
    },
};