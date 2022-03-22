const { MessageEmbed } = require("discord.js");
const { moderatorRoleId } = require("../../config.json");

module.exports = {
    name: 'slowmode',
    aliases: ["sm"],
    utilisation: '{prefix}slowmode',

    execute(client, message, args) {

      const embed1 = new MessageEmbed()
        .setDescription("Please provide the time for slowmode.")
        .setColor("RED");
      
      const embed2 = new MessageEmbed()
        .setDescription("Please specify a number.")
        .setColor("RED");

      const embed3 = new MessageEmbed()
        .setDescription(`Slowmode has been **Disabled.**`)
        .setColor("GREEN");

      const embed4 = new MessageEmbed()
        .setDescription(`Slowmode cannot be Negative.`)
        .setColor("RED");
      
      const embed5 = new MessageEmbed()
        .setDescription(`Slowmode has been **Applied** on ${message.channel} to \`${args[0]}\` seconds.`)
        .setColor("GREEN");

      const embedError = new MessageEmbed()
        .setDescription(`An error has occured while executing the command. Make sure that I have the administrator permission!`)
        .setColor("RED");

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole) return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {
      
      if (!args[0]) return message.reply({ embeds: [embed1]});
      
      if (isNaN(args[0])) return message.reply({ embeds: [embed2]});

      // Somehow, when you use ">sm 0", it doesn't set the slowmode to 0 seconds. So here is the slowmode set 0 sec force code:
      if(args[0] == 0) return message.reply({ embeds: [embed3]}).then( message.channel.setRateLimitPerUser(null).catch(err => message.channel.send({ embeds: [embedError]})) )

      if(args[0] < 0) return message.reply({ embeds: [embed4]});
    
      message.channel.setRateLimitPerUser(args[0]).catch(err => message.channel.send({ embeds: [embedError]}));
        
      message.reply({ embeds: [embed5]});

      }
          
    },
};