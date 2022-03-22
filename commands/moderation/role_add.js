const { moderatorRoleId } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'roladd',
    aliases: ["role", "ra"],
    utilisation: '{prefix}roleadd',

    async execute(client, message, args) {

    const ModeratorRole = message.guild.roles.cache.find(role => role.id === `${moderatorRoleId}`);

      if (!ModeratorRole) return console.log("[WARN] The Moderator role does not exist!");

      if (!message.member.roles.cache.has(ModeratorRole.id)) {

        message.delete()
      
      } else {

    let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const embed1 = new MessageEmbed()
        .setDescription(`Please provide the user.`)
        .setColor("RED");

    if(!rMember) return message.reply({ embeds: [embed1]});
    
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()

    const embed2 = new MessageEmbed()
        .setDescription(`Please mention the role, or use: \`<@&[ROLE_ID]>\`.`)
        .setColor("RED");
    
    if(!role) return message.reply({ embeds: [embed2]});

    if(rMember.roles.cache.has(role.id)) {

      const embed3 = new MessageEmbed()
        .setDescription(`That user is already having the role.`)
        .setColor("RED");
        
      return message.reply({ embeds: [embed3]});
    
    } else {
        
      await rMember.roles.add(role.id).catch(e => console.log(e.message))

      const embed4 = new MessageEmbed()
        .setDescription(`**Done!** Successfully added the role <@&${role.id}> to <@${rMember.user.id}>.`)
        .setColor("GREEN");
      
      message.reply({ embeds: [embed4]});

    }
    
    }
      
    },
};