const discord = require("discord.js");
const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'kick',
    aliases: ["k"],
    utilisation: '{prefix}kick',

    execute (client, message, args) {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")

    const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

    if (!ModeratorRole)
    return console.log("[WARN] The Moderator role does not exist!");

    if (!message.member.roles.cache.has(ModeratorRole.id)) {

      message.delete()
      
    } else {

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
        .setDescription("You can't kick yourself.")
        .setColor("RED");

    const embed5 = new MessageEmbed()
        .setDescription("I can't kick them, Make sure that my role is above of theirs.")
        .setColor("RED");
    
    if(!args[0]) return message.reply({ embeds: [embed1]});
    
    if(!target) return message.reply({ embeds: [embed2]});
    
    if(target.roles.cache.has(ModeratorRole.id)) return message.reply({ embeds: [embed3]});
    
    if(target.id === message.author.id) return message.reply({ embeds: [embed4]});
    
    if(target.bannable) {
      
      let embed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`${target} has been **Kicked.** | \`${target.id}\``);
      
      message.channel.send({ embeds: [embed]})
      
      target.kick()
      
    } else {
      
      return message.reply({ embeds: [embed5]});
      
    }
      
    }
      
  }
};