const Discord = require("discord.js");
require("dotenv").config()

const config = require("./config.json");
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("The bot is ready, time to die")
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hi idiot")
    }
})



client.login(process.env.TOKEN)