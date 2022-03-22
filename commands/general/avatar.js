const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ["av"],
    utilisation: '{prefix}avatar',

    execute(client, message, args) {
      
      const user = message.mentions.members.first();

      if(!user){

        const embed1 = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setDescription("Here is your Account Avatar!")
          .setImage(message.author.displayAvatarURL())

        const row1 = new MessageActionRow()
		    	.addComponents(
            new MessageButton()
              .setURL(message.author.displayAvatarURL())
				    	.setLabel('Avatar URL')
              .setEmoji("952265619020054599")
					    .setStyle('LINK'),
			  );

        message.reply({ embeds: [embed1], components: [row1]})
        
      } else {

        const embed2 = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setDescription(`Here is ${user}'s Avatar!`)
          .setImage(user.displayAvatarURL())

        const row2 = new MessageActionRow()
		    	.addComponents(
            new MessageButton()
              .setURL(user.displayAvatarURL())
				    	.setLabel('Avatar URL')
              .setEmoji("952265619020054599")
					    .setStyle('LINK'),
			  );

        message.reply({ embeds: [embed2], components: [row2]})
        
      }
          
    },
};