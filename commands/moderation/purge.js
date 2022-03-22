const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'purge',
    aliases: ["sweep", "clear", "p"],
    utilisation: '{prefix}purge',

    execute(client, message, args) {

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole)
      return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

       message.delete()
      
      } else {

      const embed1 = new MessageEmbed()
        .setDescription("Please specify the amount.")
        .setColor("RED")

      const embed2 = new MessageEmbed()
        .setDescription("Please specify the amount between **1** and **100**.")
        .setColor("RED")

      const embedError = new MessageEmbed()
        .setDescription("Sorry, but I can't delete messages that has been sent more than 14 days ago.")
        .setColor("RED")
      
      const amount = parseInt(args[0])

        if (!amount) return message.reply({ embeds: [embed1] })
      
        if (amount > 100 || amount < 1) return message.reply({ embeds: [embed2] })

        message.channel.bulkDelete(amount).catch(err => { message.reply({ embeds: [embedError] }) })

        const embedDone = new MessageEmbed()
          .setDescription(`**Done!** Successfully deleted __${amount} Messages__ in \`${client.ws.ping}\` ms.`)
          .setColor("GREEN")

        message.channel.send({ embeds: [embedDone] })

      }
          
    },
};