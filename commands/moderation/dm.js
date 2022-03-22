const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'dm',
    aliases: [],
    utilisation: '{prefix}dm',

    execute(client, message, args) {
      
      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole) return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {

      const embed1 = new MessageEmbed()
        .setDescription(`Please mention the user, Or specify the user's ID.`)
        .setColor("RED");
      
      const embed2 = new MessageEmbed()
        .setDescription(`Didn't specified the message.`)
        .setColor("RED");
      
      const embed3 = new MessageEmbed()
        .setDescription(`Cannot send the message to that user, Probably their DMs if Off or Blocked me.`)
        .setColor("YELLOW");
      
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
        
      if (!user)
        return message.reply({ embeds: [embed1]});
        
      if (!args.slice(1).join(" "))
        return message.reply({ embeds: [embed2]});

      const embed4 = new MessageEmbed()
        .setDescription(`**Done!** Successfully sent the message to: ${user.user} (\`${user.user.id}\`).`)
        .setColor("GREEN");
        
      message.channel.send({ embeds: [embed4]});

      const embedDM = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(`You've got a message from ${message.guild.name}:`)
        .setDescription(args.slice(1).join(" "))
        .setTimestamp();
        
      user.user.send({embeds: [embedDM]}).catch(() => message.reply({ embeds: [embed3]}))

      }
          
    },
};