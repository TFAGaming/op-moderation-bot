const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'weather',
    aliases: [],
    utilisation: '{prefix}weather',

    execute(client, message, args) {

      const embed1 = new MessageEmbed()
        .setDescription("Give me a location!")
        .setColor("RED");

      const embed2 = new MessageEmbed()
        .setDescription("An error has occured while executing the command...")
        .setColor("RED");

      const embed3 = new MessageEmbed()
        .setDescription("That location is invalid.")
        .setColor("RED");
      
      if (!args[0]) return message.reply({ embeds: [embed1]});

      weather.find({ search: args.join(" ") }, function(error, result) {
      
      if (error) return message.reply({ embeds: [embed2]});

      if (result === undefined || result.length === 0)
        //Err
        return message.reply({ embeds: [embed3]});

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setColor("GREEN")
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("• Degree Type:", location.degreetype, true)
        .addField("Temperature:", `${current.temperature}°`, true)
        .addField("Humidity:", `${current.humidity}%`, true)
        .addField("Wind:", current.winddisplay, true)
        .addField("Feels Like:", `${current.feelslike}°`, true)
        .addField("Timezone:", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.reply({ embeds: [Weather]});
    });
          
    },
};