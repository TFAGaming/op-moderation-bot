const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    aliases: ["server", "serveri"],
    utilisation: '{prefix}serverinfo',

    execute(client, message, args) {
      
      const guild = message.guild;
      const Emojis = guild.emojis.cache.size || "No Emojis!";
      const Roles = guild.roles.cache.size || "No Roles!";
      const Members = guild.memberCount;
 
      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(guild.name + " - Information:")
        .setColor("BLURPLE")
        .setThumbnail(guild.iconURL())
        .addField(`• Name:`, guild.name, true)
        .addField(`• ID:`, `\`${guild.id}\``, true)
        .addField(`• Owner:`, `T.F.A#7524`, true) // idk why "${guild.owner.user.name}" doesn't work, so I used "T.F.A#7524" XD
        .addField(`• Roles Count:`, `${Roles}`, true)
        .addField(`• Emojis Count:`, `${Emojis}`, true)
        .addField(`• Members Count:`, `${Members}`, true)
        .addField(`• Server Created At:`, guild.createdAt.toDateString())
        .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
        .setTimestamp();

      message.reply({ embeds: [embed]});
          
    },
};