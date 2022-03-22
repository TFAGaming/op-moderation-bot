const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'timeout',
    aliases: ["tmute", "tm"],
    utilisation: '{prefix}timeout',

    async execute(client, message, args) {

      const fetch = require('node-fetch');
      const ms = require('ms');

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole) return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {
      
        const user = message.mentions.users.first();

        const embed1 = new MessageEmbed()
          .setDescription("Please provide the user.")
          .setColor("RED");
      
        const embed2 = new MessageEmbed()
          .setDescription("Please specify the time.")
          .setColor("RED");

        const embed3 = new MessageEmbed()
          .setDescription("Please specify the time between **10 seconds** (10s) and **28 days** (28d).")
          .setColor("RED");

        if(!user) return message.reply({ embeds: [embed1] });

        const time = args.slice(1).join(' ');

        if(!time) return message.reply({ embeds: [embed2] });

        const milliseconds = ms(time);

        if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) return message.reply({ embeds: [embed3] });

        const iosTime = new Date(Date.now() + milliseconds).toISOString();

		    await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			    method: 'PATCH',
		      body: JSON.stringify({ communication_disabled_until: iosTime }),
		      headers: {
				    'Content-Type': 'application/json',
				    'Authorization': `Bot ${client.token}`,
			    },
		    });

        const embed4 = new MessageEmbed()
          .setDescription(`${user} has been **Timeout.** | \`${user.id}\``)
          .setColor("YELLOW");

        message.channel.send({ embeds: [embed4] })

      }
          
    },
};