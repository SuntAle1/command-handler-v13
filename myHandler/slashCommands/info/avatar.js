const { Client, Message, MessageEmbed, ContextMenuInteraction } = require("discord.js");


module.exports = {
  name: "avatar",
  description: "Show Your Avatar",

  /**
   * @param {Client} client
   * @param {ContextMenuInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {

      let user = message.author || message.mentions.users.first();

    let avs = new MessageEmbed()
      .setAuthor(
        `Avatar from: ${interaction.user.tag}`,
        user.displayAvatarURL({ dynamic: true }),
        "https://discord.gg/FQGXbypRf8"
      )
      .setColor('RANDOM')
      .addField(
        "❱ PNG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "png" })})`,
        true
      )
      .addField(
        "❱ JPEG",
        `[\`LINK\`](${user.displayAvatarURL({ format: "jpg" })})`,
        true
      )
      .addField(
        "❱ WEBP",
        `[\`LINK\`](${user.displayAvatarURL({ format: "webp" })})`,
        true
      )
      .setURL(
        user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setImage(
        user.displayAvatarURL({
          dynamic: true,
          size: 512,
        })
      )
      .setTimestamp()

      interaction.followUp({embeds : [avs]})
  },
};
