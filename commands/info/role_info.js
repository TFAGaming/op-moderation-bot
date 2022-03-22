const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'roleinfo',
    aliases: ["rolei"],
    utilisation: '{prefix}roleinfo',

    execute(client, message, args) {

      const embed1 = new MessageEmbed()
        .setDescription("Please mention the role, Or use `<@&[ROLE_ID]>`.")
        .setColor("RED");
      
      if (!args[0]) return message.reply({ embeds: [embed1]})
      
      let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
      
      if (!role) return message.channel.send("**Please Enter A Valid Role!**");

      const status = {
          false: "No",
          true: "Yes"
      }

      let roleembed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setColor(role.hexColor)
        .setTitle(`Role Info - \`[  ${role.name}  ]\`:`)
        .setThumbnail(message.guild.iconURL())
        .addField("**• ID:**", `\`${role.id}\``, true)
        .addField("**• Name:**", `${role.name}`, true)
        .addField("**• Hex:**", `${role.hexColor}`, true)
        .addField("**• Members:**", `${role.members.size}`, true)            
        .addField("**• Position:**", `${role.position}`, true)
        .addField("**• Mentionable:**", `${status[role.mentionable]}`, true)
        .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
        .setTimestamp();

      message.reply({ embeds: [roleembed]});
          
    },
};