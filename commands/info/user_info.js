const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    aliases: ["useri"],
    utilisation: '{prefix}userinfo',

    execute(client, message, args) {
      
      let member = message.mentions.members.first() || message.member;

      const statuses = {
        online: "Online",
        dnd: "Do Not Disturb",
        idle: "Idle",
        offline: "Offline/Invisible"
      };

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(member.user.username + " Information!")
        .setColor("BLURPLE")
        .setThumbnail(member.user.displayAvatarURL())
        .addField("• Full Name:", member.user.tag, true)
        .addField("• ID:", `${member.id}`, true)
        .addField(`• Avatar URL:`, `[Link](${member.user.displayAvatarURL()})`, true)
        .addField("• Joined Server At:", member.joinedAt.toDateString())
        .addField("• Joined Discord At:", member.user.createdAt.toDateString())
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();

      message.reply({ embeds: [embed]});
          
    },
};
