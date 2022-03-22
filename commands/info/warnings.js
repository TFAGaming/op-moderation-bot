const { MessageEmbed } = require('discord.js');
const warndb = require('../../models/warndb');

module.exports = {
    name: 'warnings',
    aliases: ["warns"],
    utilisation: '{prefix}warnings',

    execute(client, message, args) {

        // ⚠️ • WARN: There is a bug on this command, So please do not mess up with this command.
      
        const user = message.mentions.members.first() /* || message.author.id*/ ;

        const embedNoUser = new MessageEmbed()
          .setDescription("Please mention the user!")
          .setColor("RED");

        if(!user) return message.reply({ embeds: [embedNoUser] });

        warndb.findOne({
            guild: message.guild.id, 
            user: user.id
        }, async (err, data) => {
            if (err) throw err
          
            if (data) {
                const e = data.content.map(
                    (w, i) => `\n\`#${i + 1}\` | **Moderator:** ${message.guild.members.cache.get(w.moderator).user.tag} (\`${message.guild.members.cache.get(w.moderator).user.id}\`)\n> __Reason:__ ${w.reason}\n`
                )
                const embed = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
                    .setDescription(`• __Total Warnings from the User__ <@${user.user.id}> (${user.user.id}):\n` + e.join(' '))
                    .setFooter("If there is no warnings above, means that user does not have any warnings!")
                    .setColor("RED")
                    .setTimestamp()
                message.reply({
                    embeds: [embed]
                })
            } else {

                const noWarns = new MessageEmbed()
                  .setDescription("You don't have any warnings!")
                  .setColor("GREEN")
              
                message.reply({ embeds: [noWarns] })
            }
        })

          
    },
};