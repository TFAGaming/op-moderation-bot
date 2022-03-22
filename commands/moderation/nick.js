const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'nick',
    aliases: ["setnick", "n"],
    utilisation: '{prefix}nick',

    execute(client, message, args) {

    const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

    if (!ModeratorRole)
    return console.log("[WARN] The Moderator role does not exist!");

    if (!message.member.roles.cache.has(ModeratorRole.id)) {

      message.delete()
      
    } else {
      
        if (!args[0]) return message.channel.send("**Please Enter A User!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
      
        if (!member) return message.channel.send("**Please Enter A Username!**");

        if(member.roles.cache.has(ModeratorRole.id)) return message.reply("Cant change nick because they have the same power as yours.");

        if (args[1]) {

        let nick = args.slice(1).join(' ');
          
        member.setNickname(nick).catch((err) => message.reply(`**Error!** ${err}`))
          
        const embed = new MessageEmbed()
          .setDescription(`<@${member.id}>'s nickname has been **Changed** to \`${nick}\`.`)
          .setColor("GREEN")
      
        message.channel.send({ embeds: [embed]})
        
        } else {

        const modNick = Math.floor(Math.random() * 10000) + 1;

        member.setNickname(`Moderated Nickname ${modNick}`).catch((err) => message.reply(`**Error!** ${err}`))
          
        const embed = new MessageEmbed()
          .setDescription(`<@${member.id}>'s nickname has been **Moderated** to \`Moderated Nickname ${modNick}\`.`)
          .setColor("YELLOW")
      
        message.channel.send({ embeds: [embed]})
          
        }

    }
          
    },
};