const client = require("../index");
const prefix = require('../config.json');

client.on("ready", () => {
    console.log(`${client.user.tag} is Online!`)
    client.user.setActivity(`PLAYING: ${prefix}help`)
});
