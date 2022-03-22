const { moderatorRoleId, mutedRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    aliases: ["unshut", "unm"],
    utilisation: '{prefix}unmute',

    execute(client, message, args) {

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole)
        return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {

      const target = message.mentions.members.first()
      
      let role = message.guild.roles.cache.find(r => r.id === mutedRoleId);

      const embed1 = new MessageEmbed()
        .setDescription("Please mention the user.")
        .setColor("RED");

      const embed2 = new MessageEmbed()
        .setDescription("Invalid user.")
        .setColor("RED");
      
      const embed3 = new MessageEmbed()
        .setDescription("That user is having the same power as yours.")
        .setColor("RED");

      const embed4 = new MessageEmbed()
        .setDescription("That user is already unmuted.")
        .setColor("RED");

      const embedError = new MessageEmbed()
        .setDescription("Couldn't remove the muted role to that user.")
        .setColor("RED");

      if(!args[0]) return message.reply({ embeds: [embed1]});
    
      if(!target) return message.reply({ embeds: [embed2]});

      if(target.roles.cache.has(ModeratorRole.id)) return message.reply({ embeds: [embed3]});

      if(!target.roles.cache.has(mutedRoleId)) return message.reply({ embeds: [embed4]});

      target.roles.remove(role).catch(() => message.reply({ embeds: [embedError]}));

      const embed5 = new MessageEmbed()
        .setDescription(`${target} has been **Unmuted.** | \`${target.id}\``)
        .setColor("GREEN");

      message.channel.send({ embeds: [embed5]})

      }
      
    },
};