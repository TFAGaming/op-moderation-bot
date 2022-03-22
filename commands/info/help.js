const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js');
const { prefix } = require("../../config.json");

const commandsEmbedsColor = "RANDOM";

module.exports = {
    name: 'help',
    aliases: ["h", "commands", "cmd", "cmds"],
    utilisation: '{prefix}test',

    async execute(client, message, args) {
      
      const row = new MessageActionRow()
			  .addComponents(
				  new MessageSelectMenu()
				  	.setCustomId('select')
				  	.setPlaceholder('Click here to Select a Command Category!')
				  	.addOptions([
						  {
							  label: 'Fun',
						  	description: 'Shows a list of Fun Commands.',
							  value: '1',
                emoji: "😂",
						  },
              {
							  label: 'Games',
						  	description: 'Shows a list of Games Commands.',
							  value: '2',
                emoji: "🎮",
						  },
              {
							  label: 'General',
						  	description: 'Shows a list of General Commands.',
							  value: '3',
                emoji: "🤖",
						  },
              {
							  label: 'Image',
						  	description: 'Shows a list of Image Commands.',
							  value: '4',
                emoji: "📸",
						  },
              {
							  label: 'Information',
						  	description: 'Shows a list of Info Commands.',
							  value: '5',
                emoji: "ℹ️",
						  },
              {
							  label: 'Minecraft',
						  	description: 'Shows a list of Minecraft Commands.',
							  value: '6',
                emoji: "955440066321322004",
						  },
              {
							  label: 'Moderation',
						  	description: 'Shows a list of Moderation Commands.',
							  value: '7',
                emoji: "⚒",
						  },
              {
							  label: 'Utility',
						  	description: 'Shows a list of Utility Commands.',
							  value: '8',
                emoji: "⚙️",
						  },
					  ]),
			  );

      const buttons = new MessageActionRow()
			.addComponents(
        new MessageButton()
          .setURL('https://discord.gg/7zrFC2NPrd')
					.setLabel('Support Server')
          .setEmoji("952265385674153984")
					.setStyle('LINK'),
        new MessageButton()
          .setURL('https://replit.com/@TFA1/Better-Discord-Moderation-Bot-Soon')
					.setLabel('Source Code')
          //.setDisabled(true)
          .setEmoji("954348778930982912")
					.setStyle('LINK'),
			);

      const embedMenu = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(client.user.username + " - Help Menu:")
        .setDescription(`Hey ${message.author}, Thanks for using **${client.user.username}** for today! Select the commands category from the select menu below.`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setColor("GREEN");

		await message.reply({ embeds: [embedMenu], components: [row, buttons] });

      // If you want to add more commands, use this template below in the ".addFields( ... )" code:
      // { name: "• ", value: `\`${prefix}\``, inline: true },

      const embed1 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Fun Commands:")
        .addFields(
          { name: "• 8ball", value: `\`${prefix}8ball\``, inline: true },
          { name: "• random_color", value: `\`${prefix}randomc\``, inline: true },
          { name: "• random_number", value: `\`${prefix}randomn\``, inline: true },
          { name: "• ship", value: `\`${prefix}ship\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed2 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Games Commands:")
        .addFields(
          { name: "• find_the_number", value: `\`${prefix}number\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed3 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("General Commands:")
        .addFields(
          { name: "• avatar", value: `\`${prefix}av\``, inline: true },
          { name: "• ping", value: `\`${prefix}ping\``, inline: true },
          { name: "• server_icon", value: `\`${prefix}servericon\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed4 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Image Commands:")
        .addFields(
          { name: "• achievement", value: `\`${prefix}ach\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed5 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Info Commands:")
        .addFields(
          { name: "• help", value: `\`${prefix}h\``, inline: true },
          { name: "• member_count", value: `\`${prefix}memberc\``, inline: true },
          { name: "• role_info", value: `\`${prefix}rolei\``, inline: true },
          { name: "• server_info", value: `\`${prefix}serveri\``, inline: true },
          { name: "• uptime", value: `\`${prefix}up\``, inline: true },
          { name: "• user_info", value: `\`${prefix}useri\``, inline: true },
          { name: "• warnings", value: `\`${prefix}warns\``, inline: true },
          { name: "• weather", value: `\`${prefix}weather\``, inline: true },
          { name: "• yt_search", value: `\`${prefix}yt\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed6 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Minecraft Commands:")
        .addFields(
          { name: "• skin", value: `\`${prefix}skin\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed7 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Moderation Commands:")
        .addFields(
          { name: "• ban", value: `\`${prefix}b\``, inline: true },
          { name: "• dm", value: `\`${prefix}dm\``, inline: true },
          { name: "• kick", value: `\`${prefix}k\``, inline: true },
          { name: "• mute", value: `\`${prefix}m\``, inline: true },
          { name: "• nick", value: `\`${prefix}n\``, inline: true },
          { name: "• purge", value: `\`${prefix}p\``, inline: true },
          { name: "• remove_timeout", value: `\`${prefix}rtm\``, inline: true },
          { name: "• remove_warning", value: `\`${prefix}rw\``, inline: true },
          { name: "• role_add", value: `\`${prefix}ra\``, inline: true },
          { name: "• role_remove", value: `\`${prefix}rm\``, inline: true },
          { name: "• slowmode", value: `\`${prefix}sm\``, inline: true },
          { name: "• timeout", value: `\`${prefix}tm\``, inline: true },
          { name: "• unmute", value: `\`${prefix}unm\``, inline: true },
          { name: "• warn", value: `\`${prefix}w\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed8 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Utility Commands:")
        .addFields(
          { name: "• suggest", value: `\`${prefix}suggest\``, inline: true },
          { name: "• dropdown_role", value: `\`${prefix}roles\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const collector = message.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU"
      })

      collector.on("collect", async (collected) => {

        const value = collected.values[0]

        if(value === "1"){
          collected.reply({ embeds: [embed1], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "2"){
          collected.reply({ embeds: [embed2], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "3"){
          collected.reply({ embeds: [embed3], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "4"){
          collected.reply({ embeds: [embed4], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "5"){
          collected.reply({ embeds: [embed5], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "6"){
          collected.reply({ embeds: [embed6], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "7"){
          collected.reply({ embeds: [embed7], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }

        if(value === "8"){
          collected.reply({ embeds: [embed8], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        }
        
      })
        
    },
};