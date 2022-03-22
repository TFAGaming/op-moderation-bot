const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'achievement',
    aliases: ["ach"],
    utilisation: '{prefix}achievement',

    execute(client, message, args) {
      
      const text = args.join("%20");

      const embed1 = new MessageEmbed()
        .setDescription("Please provide the Text!")
        .setColor("RED");

      const embed2 = new MessageEmbed()
        .setDescription("Please provide the Text not longer than 20 Letters!")
        .setColor("RED");

      if(!text) return message.reply({ embeds: [embed1] });

      if(text.length > 20) return message.reply({ embeds: [embed2] });

      const randomAch = Math.floor((Math.random() * 44) + 1);

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Minecraft Achievement:")
        .setImage(
        `https://minecraftskinstealer.com/achievement/${randomAch}/Achievement%20Get!/${text}`
        )
        .setColor("#5E9D34")
        .setTimestamp();

      message.reply({ embeds: [embed]})
          
    },
};