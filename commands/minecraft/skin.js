const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'skin',
    aliases: ["mcskin"],
    utilisation: '{prefix}skin',

    execute(client, message, args) {

      const request = require("request");
      const player = args.join(" ");

      const embed1 = new MessageEmbed()
        .setDescription("Please specify a player's nickname.")
        .setColor("RED");

      if(!player) return message.reply({ embeds: [embed1] });

      const embed2 = new MessageEmbed()
        .setDescription("Player's Nicknames Length cannot be over 16 letters.")
        .setColor("RED");

      if(player.length > 16) return message.reply({ embeds: [embed2] });

      let mojang_player_api = `https://api.mojang.com/users/profiles/minecraft/${player}`;

      request(mojang_player_api, function(err, resp, body) {

        const embed3 = new MessageEmbed()
          .setDescription("That Player is probably Invalid.")
          .setColor("RED");
        
        if(err) return message.reply({ embeds: [embed3] });

        try {
          
          body = JSON.parse(body);       
          let player_id = body.id;
          
          let render = `https://crafatar.com/renders/body/${player_id}`;
          let skin = `https://crafatar.com/skins/${player_id}`;
          let avatar = `https://crafatar.com/avatars/${player_id}`;

          const embed = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle(`${player}'s Skin and Avatar:`)
            .setDescription(`${player}'s Skin URL is linked **[Here](${skin})**.`)
            .setImage(render)
            .setThumbnail(avatar)
            .setColor("#5E9D34");

        message.reply({ embeds: [embed] })
                    
        } catch (err) {

          console.log("[Error]", err)
          
        }
      })
      
    },
};