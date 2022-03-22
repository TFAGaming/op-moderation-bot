const { MessageEmbed } = require('discord.js');
const warndb = require('../../models/warndb');
const { moderatorRoleId } = require("../../config.json");

module.exports = {
    name: 'warn',
    aliases: ["w"],
    utilisation: '{prefix}warn',

    execute(client, message, args) {
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

      const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole) return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {

        const embed1 = new MessageEmbed()
          .setDescription("Please mention the user.")
          .setColor("RED");
      
        const embed2 = new MessageEmbed()
          .setDescription("Please provide the reason.")
          .setColor("RED");

        if (!user) return message.reply({ embeds: [embed1]})
      
        const reason = args.slice(1).join(" ")
      
        if (!reason) return message.reply({ embeds: [embed2]})

        warndb.findOne({
            guild: message.guild.id,
            user: user.user.id
        }, async (err, data) => {
            if (err) throw err;
            if (!data) {
                data = new warndb({
                    guild: message.guild.id,
                    user: user.user.id,
                    content: [{
                        moderator: message.author.id,
                        reason: reason
                    }]
                })
            } else {
                const object = {
                    moderator: message.author.id,
                    reason: reason
                }
                data.content.push(object)
            }
            data.save()

        })

        const embed3 = new MessageEmbed()
          .setDescription(`${user} has been **Warned.** | \`${user.id}\``)
          .setColor("YELLOW");

        const embedDM = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setDescription(`You've been warned on **${message.guild.name}**! (\`${message.guild.id}\`)\n\n__Reason:__ \`${reason}\``)
          .setColor("ORANGE");

        message.channel.send({ embeds: [embed3]})

        const embedError = new MessageEmbed()
          .setDescription(`${user} has been **Warned**, But they didn't received a DM message.`)
          .setColor("RED");
          
        user.send({ embeds: [embedDM]}).catch(err => console.log("[Error] ", err))
      }
          
    },
};