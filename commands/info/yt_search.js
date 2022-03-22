const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const ytsearch = require("yt-search")

module.exports = {
    name: 'yt-search',
    aliases: ["yt"],
    utilisation: '{prefix}yt-search',

    execute(client, message, args) {

      const embedNoQuery = new MessageEmbed()
        .setDescription("Please provide the Query.")
        .setColor("RED");

      const embedSearching = new MessageEmbed()
        .setDescription("🔍 Searching... (*This might take a while.*)")
        .setColor("YELLOW"); 

      const embedQueryNotFound = new MessageEmbed()
        .setDescription("Looks like That Query is Invalid.")
        .setColor("RED");
      
      if(!args.length) {
            return message.reply({ embeds: [embedNoQuery] })
        }

        message.reply({ embeds: [embedSearching] }).then(async (msg) => {
            let search = await ytsearch(args.join(" "))
            let video = search.videos[0]
            if(!video) {
                return msg.edit({ embeds: [embedQueryNotFound] })
            }

            const { views, title, timestamp, thumbnail, url, duration, author, ago,  image} = video
          
            const embed = new MessageEmbed()
              .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
              .setTitle(`Total Results from the Search: ${args.join(" ")}`)
              .setThumbnail(thumbnail)
              .setImage(image)
              .addFields(
                {name: "• Title:", value: title},
                //{name: "• URL:", value: `[Click Here](${url})`, inline: true}, <== Removed because of the Buttons Feature.
                {name: "• Author:", value: `[${author.name}](${author.url})`, inline: true},
                {name: "• Created:", value: `${ago}`, inline: true},
                {name: "• Video Length:", value: `${timestamp}`, inline: true}, 
                {name: "• Total Views:", value: `${views}`, inline: true}
              )
              .setColor("RED")
              .setFooter(`Requested by: ${message.author.tag}`, "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579593-yumminkysocialmedia38_83075.png")
              .setTimestamp();

              const row = new MessageActionRow()
			          .addComponents(
				          new MessageButton()
					          .setURL(url)
					          .setLabel('Video URL')
                    .setEmoji("952263065624260689")
					          .setStyle('LINK'),
			          );

            msg.edit({ content: `:white_check_mark: **__Query found!__**` , embeds: [embed], components: [row] });
          
        })
          
    },
};