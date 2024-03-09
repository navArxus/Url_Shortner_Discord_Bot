
// Express 
const express = require("express")
const mongoose = require("mongoose")
const app = express()

// Controller Import 
const handleRedirectURL  = require('./controllers/redirect')
const createURL = require("./controllers/createURL")
const allUrl = require("./controllers/allurl")
const analytics = require("./controllers/analytics")
const deleteFunc = require("./controllers/delete")

// Discord.js
const { Client, GatewayIntentBits, Message } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// dotenv
require('dotenv').config({})

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Discord_bot").then(
    console.log("Conneted To mongoDB")
).catch((err) =>{console.error(`Error connecting to Mongo DB : ${err}`)});

// App request
app.get("/:id",handleRedirectURL)

// Discord Listner 
client.on('messageCreate', msg => {
    if (msg.author.bot) return; // Ignore bots
    console.log(msg)
    msg.reply(`Hello ${msg.author.username} ${'https://navarxus.vercel.app/'}`)
})

// Intersection listner 
client.on('interactionCreate', async interaction => {

    const { commandName, options } = interaction;

    if (commandName === "create") {
        const userInput = options.getString('create')
        // console.log(interaction) //.user.id .user.username
        const result = await createURL(userInput,interaction.user.id,interaction.user.username)
        interaction.reply(`http://localhost:8001/${result}`)
    }
    if (commandName === "allurl") {
        const result = await allUrl(interaction.user.id,interaction.user.username)
        interaction.reply(result)
    }
    if (commandName === "analytics") {
        const userInput = options.getString('url')
        const result = await analytics(userInput.replace("http://localhost:8001/",""))
        interaction.reply(`Number of visit on ${userInput} : ${result}`)

    }
    if (commandName === "delete") {
        const userInput = options.getString('url')
        console.log(userInput)
        const result = await deleteFunc(userInput.replace("http://localhost:8001/",""))
        interaction.reply(`${userInput} : is disabled`)

    }

    // console.log(interaction);
})

// Final call 
client.login(process.env.DISCORD_TOKEN)

app.listen(8001,() => {
    console.log("Express Server Started")
})
