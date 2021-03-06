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
                emoji: "đ",
						  },
              {
							  label: 'Games',
						  	description: 'Shows a list of Games Commands.',
							  value: '2',
                emoji: "đŽ",
						  },
              {
							  label: 'General',
						  	description: 'Shows a list of General Commands.',
							  value: '3',
                emoji: "đ¤",
						  },
              {
							  label: 'Image',
						  	description: 'Shows a list of Image Commands.',
							  value: '4',
                emoji: "đ¸",
						  },
              {
							  label: 'Information',
						  	description: 'Shows a list of Info Commands.',
							  value: '5',
                emoji: "âšī¸",
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
                emoji: "â",
						  },
              {
							  label: 'Utility',
						  	description: 'Shows a list of Utility Commands.',
							  value: '8',
                emoji: "âī¸",
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
      // { name: "âĸ ", value: `\`${prefix}\``, inline: true },

      const embed1 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Fun Commands:")
        .addFields(
          { name: "âĸ 8ball", value: `\`${prefix}8ball\``, inline: true },
          { name: "âĸ random_color", value: `\`${prefix}randomc\``, inline: true },
          { name: "âĸ random_number", value: `\`${prefix}randomn\``, inline: true },
          { name: "âĸ ship", value: `\`${prefix}ship\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed2 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Games Commands:")
        .addFields(
          { name: "âĸ find_the_number", value: `\`${prefix}number\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed3 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("General Commands:")
        .addFields(
          { name: "âĸ avatar", value: `\`${prefix}av\``, inline: true },
          { name: "âĸ ping", value: `\`${prefix}ping\``, inline: true },
          { name: "âĸ server_icon", value: `\`${prefix}servericon\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed4 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Image Commands:")
        .addFields(
          { name: "âĸ achievement", value: `\`${prefix}ach\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed5 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Info Commands:")
        .addFields(
          { name: "âĸ help", value: `\`${prefix}h\``, inline: true },
          { name: "âĸ member_count", value: `\`${prefix}memberc\``, inline: true },
          { name: "âĸ role_info", value: `\`${prefix}rolei\``, inline: true },
          { name: "âĸ server_info", value: `\`${prefix}serveri\``, inline: true },
          { name: "âĸ uptime", value: `\`${prefix}up\``, inline: true },
          { name: "âĸ user_info", value: `\`${prefix}useri\``, inline: true },
          { name: "âĸ warnings", value: `\`${prefix}warns\``, inline: true },
          { name: "âĸ weather", value: `\`${prefix}weather\``, inline: true },
          { name: "âĸ yt_search", value: `\`${prefix}yt\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed6 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Minecraft Commands:")
        .addFields(
          { name: "âĸ skin", value: `\`${prefix}skin\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed7 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Moderation Commands:")
        .addFields(
          { name: "âĸ ban", value: `\`${prefix}b\``, inline: true },
          { name: "âĸ dm", value: `\`${prefix}dm\``, inline: true },
          { name: "âĸ kick", value: `\`${prefix}k\``, inline: true },
          { name: "âĸ mute", value: `\`${prefix}m\``, inline: true },
          { name: "âĸ nick", value: `\`${prefix}n\``, inline: true },
          { name: "âĸ purge", value: `\`${prefix}p\``, inline: true },
          { name: "âĸ remove_timeout", value: `\`${prefix}rtm\``, inline: true },
          { name: "âĸ remove_warning", value: `\`${prefix}rw\``, inline: true },
          { name: "âĸ role_add", value: `\`${prefix}ra\``, inline: true },
          { name: "âĸ role_remove", value: `\`${prefix}rm\``, inline: true },
          { name: "âĸ slowmode", value: `\`${prefix}sm\``, inline: true },
          { name: "âĸ timeout", value: `\`${prefix}tm\``, inline: true },
          { name: "âĸ unmute", value: `\`${prefix}unm\``, inline: true },
          { name: "âĸ warn", value: `\`${prefix}w\``, inline: true },
        )
        .setColor(commandsEmbedsColor);

      const embed8 = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Utility Commands:")
        .addFields(
          { name: "âĸ suggest", value: `\`${prefix}suggest\``, inline: true },
          { name: "âĸ dropdown_role", value: `\`${prefix}roles\``, inline: true },
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