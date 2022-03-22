const { MessageEmbed } = require("discord.js");
const { suggestionChannelId, prefix } = require("../../config.json");

module.exports = {
    name: 'suggest',
    aliases: ["suggestion"],
    utilisation: '{prefix}suggest',

    async execute(client, message, args) {
      
      const embed1 = new MessageEmbed()
        .setDescription("Please provide your suggestion message.")
        .setColor("RED");

      const suggestion = args.join(' ');
      
      if(!suggestion) return message.reply({ embeds: [embed1]})

      const channelSuggest = message.guild.channels.cache.find(ch => ch.id === suggestionChannelId);

      if (!channelSuggest) { 
        console.log("[Warn] No Suggestion channel id set in config.json file!") 
        }

      const embedDone = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .addFields(
          { name: "• Suggestion:", value: `\`\`\`\n${suggestion}\n\`\`\`` },
          { name: "• Suggested By:", value: `${message.author} \`(${message.author.id})\`` },
        )
        .setFooter(`Do you have any suggestion to post here? You can use the command ${prefix}suggest!`)
        .setColor("PURPLE")
        .setTimestamp();

      var msg = await channelSuggest.send({ embeds: [embedDone] }).catch(err => console.log(err))

        msg.react("948948438601592862").catch(err => console.log("[Error - Emoji 1] => ", err))
        msg.react("948948619111854080").catch(err => console.log("[Error - Emoji 2] => ", err))

      const embedSent = new MessageEmbed()
        .setDescription(`**Done!** Successfully sent your Suggestion to the channel: ${channelSuggest}.`)
        .setColor("GREEN");

      message.reply({ embeds: [embedSent] })
          
    },
};