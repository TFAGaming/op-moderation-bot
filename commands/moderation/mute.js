const { moderatorRoleId, mutedRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mute',
    aliases: ["shut", "m"],
    utilisation: '{prefix}mute',

    execute(client, message, args) {

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole)
        return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {

      const target = message.mentions.members.first()
    
      const reason = args.slice(1).join(" ")
      
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
        .setDescription("That user is already muted.")
        .setColor("RED");

      const embedError = new MessageEmbed()
        .setDescription("Couldn't add the muted role to that user.")
        .setColor("RED");

      if(!args[0]) return message.reply({ embeds: [embed1]});
    
      if(!target) return message.reply({ embeds: [embed2]});

      if(target.roles.cache.has(ModeratorRole.id)) return message.reply({ embeds: [embed3]});

      if(target.roles.cache.has(mutedRoleId)) return message.reply({ embeds: [embed4]});

      target.roles.add(role).catch(() => message.reply({ embeds: [embedError]}));

      const embed5 = new MessageEmbed()
        .setDescription(`${target} has been **Muted.** | \`${target.id}\``)
        .setColor("YELLOW");

      message.channel.send({ embeds: [embed5]})

      }
      
    },
};