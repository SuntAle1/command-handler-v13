
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [''], 
    categories : 'info', 
    permissions : ' ', 
    description: 'Show Bot Ping',
    cooldown : 5,
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        try {
            let ping = new MessageEmbed()
            .setDescription(`🏓 Ping : ${client.ws.ping}`)
            .setColor('RANDOM')
            .setTimestamp()

            message.channel.send({embeds : [ping]})
        } catch (e) {
                console.log(e);
        }
    }
}