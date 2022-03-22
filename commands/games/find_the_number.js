const currentGames = {};
const Discord = require("discord.js");
const { timeoutGame } = require("../../config/findTheNumber/findTheNumber.json");
const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = {
    name: 'findthenumber',
    aliases: ["number", "ftn"],
    utilisation: '{prefix}findthenumber',

    async execute(client, message, args) {
      
      if (currentGames[message.guild.id]) {

      const gameAlreadyStarted = new MessageEmbed()
        .setDescription("Game is already started!")
        .setColor("RED");
        
			return message.reply({ embeds: [gameAlreadyStarted] })
		}

		const participants = [];
		const number = Math.floor(Math.random() * 50) + 1;

    const gameStarted = new MessageEmbed()
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
      .setTitle("Find the Number - Started!")
      .setDescription(`**Game started!** Now, find the number between \`1\` and \`50\`.`)
      .setFooter(`Started By: ${message.author.tag}`)
      .setTimestamp()
      .setColor("GREEN");

		await message.reply({ embeds: [gameStarted] }).then(message.react("✅"));

		const gameCreatedAt = Date.now();

		const collector = new Discord.MessageCollector(
			message.channel,
			m => !m.author.bot,
			{
				//time: 60000 = 1 minute
          time: timeoutGame
			}
		);
		currentGames[message.guild.id] = true;

		collector.on("collect", async msg => {
			if (!participants.includes(msg.author.id)) {
				participants.push(msg.author.id);
			}

			if (isNaN(msg.content)) {
				return;
			}

			const parsedNumber = parseInt(msg.content);
      	const parsedNumber1 = parseInt(msg.content, 10);
  

			if (parsedNumber === number) {

          msg.react("🎉");
          msg.react("🏆");

          const gameWinner = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Find the Number - Winner!")
            .setDescription(`🏆 Congratulations, ${msg.author.toString()}! **You won the Game!**`)
            .addFields(
              { name: "• Number:", value: `\`${number}\``, inline: true },
              { name: "• Participants", value: `${participants.map(p => `<@${p}>`).join(", ")}.`, inline: true },
            )
            .setFooter(`Start a new game by typing: ${prefix}number`)
            .setColor("GREEN");

          message.channel.send({ embeds: [gameWinner] })
		
				collector.stop(msg.author.username);
        
			}
      if(participants.length >= 10)
      {
        return;
      }
			if (parseInt(msg.content) < number) {

        const numberSmall = new MessageEmbed()
          .setDescription(`Your number **${parsedNumber}** is Small!`)
          .setColor("ORANGE")
        
        msg.reply({ embeds: [numberSmall] })
			}
			if (parseInt(msg.content) > number) {
        
				const numberBig = new MessageEmbed()
          .setDescription(`Your number **${parsedNumber}** is Big!`)
          .setColor("ORANGE")
        
        msg.reply({ embeds: [numberBig] })
        
			}
		});

		collector.on("end", (_collected, reason) => {
			delete currentGames[message.guild.id];
			if (reason === "time") {
        
				const gameTimeout = new MessageEmbed()
          .setDescription("Game stopped! Nobody found the number.")
          .setColor("RED")
        
        message.channel.send({ embeds: [gameTimeout] })
        
			}
    
      });
          
    },
};