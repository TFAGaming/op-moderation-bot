const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    aliases: [],
    utilisation: '{prefix}8ball',

    execute(client, message, args) {

      const embed1 = new MessageEmbed()
        .setDescription("Please provide the question!")
        .setColor("RED");

      const question = args.join(' ');
      
      if(!question) return message.reply({ embeds: [embed1]})

      const messages = ["sure why not", "yeah go ahead", "**no.**", "if you gain one brain cell tomorrow, then yes.", "ask your parents, not me", "i dont want to answer your shit questions bro", "leave.. me.. **ALONE!!**", "ask someone else, im busy rn"]

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      const embedDone = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription("`🎱` Here is your question and the answer from me!")
        .addFields(
          { name: "• Question:", value: question },
          { name: "• Answer:", value: randomMessage },
        )
        .setColor("RANDOM")
        .setTimestamp();

      message.reply({ embeds: [embedDone] })
          
    },
};