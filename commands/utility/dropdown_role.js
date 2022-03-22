const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const { roleId } = require("../../config/dropdownRole/dropdownRole.json");

module.exports = {
    name: 'roles',
    aliases: ["newsping", "r"],
    utilisation: '{prefix}roles',

    async execute(client, message, args) {

      const rowRoles = new MessageActionRow()
			  .addComponents(
				  new MessageSelectMenu()
				  	.setCustomId('rolesdropdown')
				  	.setPlaceholder('Click here to Add or Remove the Role.')
				  	.addOptions([
						  {
							  label: 'Add The Role',
						  	description: 'Adds the role to your account on this server.',
							  value: 'addR',
                emoji: '955439733868224562',
						  },
              {
							  label: 'Remove The Role',
						  	description: 'Removes the role to your account on this server.',
							  value: 'removeR',
                emoji: '955439768370569288',
						  },
					  ]),
			  );

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(client.user.username + " - DropDown Role:")
        .setDescription(`• The current role on the DataBase is: <@&${roleId}> (\`${roleId}\`).\n\n**Click on the Select menu below to __Add__ or __Remove__ the Role.**`)
        .setTimestamp()
        .setColor("BLUE");

		await message.reply({ embeds: [embed], components: [rowRoles] });

      const embedGiven = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("**Done!** Successfully __Added__ the role to your account.")
        .setColor("GREEN");

      const embedAlreadyGiven = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("You already have that Role.")
        .setColor("YELLOW");
      
      const embedRemoved = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("**Done!** Successfully __Removed__ the role to your account.")
        .setColor("GREEN");

      const embedAlreadyRemoved = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("You already don't have that Role.")
        .setColor("YELLOW");

      const collectorRoles = message.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU"
      })

      collectorRoles.on("collect", async (collectedRoles) => {

        const value = collectedRoles.values[0]

        const user = collectedRoles.member;

        if(value === "addR"){

          let role = message.guild.roles.cache.find(r => r.id === roleId);

          if (!role)
          return console.log("[WARN] The role does not exist on dropdownRole.json!");

          if (!user.roles.cache.has(role.id)){

            collectedRoles.member.roles.add(role).catch(err => console.log("[Error Handled]"))
          
            collectedRoles.reply({ embeds: [embedGiven], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        
          } else {

            collectedRoles.reply({ embeds: [embedAlreadyGiven], ephemeral: true }).catch(err => console.log("[Error Handled]"));
            
          }
          
        }

        if(value === "removeR"){

          let role = message.guild.roles.cache.find(r => r.id === roleId);

          if (!role)
          return console.log("[WARN] The role does not exist on dropdownRole.json!");

          if (user.roles.cache.has(role.id)){

            collectedRoles.member.roles.remove(role).catch(err => console.log("[Error Handled]"))
          
            collectedRoles.reply({ embeds: [embedRemoved], ephemeral: true }).catch(err => console.log("[Error Handled]"));
        
          } else {

            collectedRoles.reply({ embeds: [embedAlreadyRemoved], ephemeral: true }).catch(err => console.log("[Error Handled]"));
            
          }
          
        }
        
      })

      // ---------- OLD CODE: ---------
      
      /*const rowRoles = new MessageActionRow()
			  .addComponents(
				  new MessageSelectMenu()
				  	.setCustomId('rolesdropdown')
				  	.setPlaceholder('Select!')
				  	.addOptions([
						  {
							  label: 'News Ping',
						  	description: 'Give / Remove News Ping role from your account.',
							  value: 'role',
                emoji: "🔔",
						  },
					  ]),
			  );

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(client.user.username + " - DropDown Roles:")
        .setDescription("Select the Role from the DropDown Menu below!")
        .setTimestamp()
        .setColor("BLUE");

		await message.reply({ embeds: [embed], components: [rowRoles] });

      const embedGiven = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("**Done!** Successfully __Added__ the role to your account.")
        .setColor("GREEN");
      
      const embedRemoved = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("**Done!** Successfully __Removed__ the role to your account.")
        .setColor("GREEN");

      const collectorRoles = message.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU"
      })

      collectorRoles.on("collect", async (collectedRoles) => {

        const value = collectedRoles.values[0]

        const user = collectedRoles.member; // This is very important: Why? Because when you use the command, you can add/remove the role to your account, but the other members can control the role to your account, so this is important.

        if(value === "role"){

          let role = message.guild.roles.cache.find(r => r.id === roleId);

          if (!role)
          return console.log("[WARN] The role does not exist on dropdownRole.json!");

          if (!user.roles.cache.has(role.id)){

            collectedRoles.member.roles.add(role).catch(err => console.log("[Error Handled]"))
          
            collectedRoles.reply({ embeds: [embedGiven], ephemeral: true }).catch(err => console.log("[Error Handled]"));
          
          } else {

            collectedRoles.member.roles.remove(role).catch(err => console.log("[Error Handled]"))

            collectedRoles.reply({ embeds: [embedRemoved], ephemeral: true }).catch(err => console.log("[Error Handled]"));
          
          }
          
        }
        
      })*/
        
    },
};