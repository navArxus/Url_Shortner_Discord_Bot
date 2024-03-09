const { REST, Routes } = require('discord.js');
require('dotenv').config({})
const {createURLComm} = require("./Commands/create")
const {allURLComm} = require("./Commands/allURL")
const {analyticsComm} = require("./Commands/analytics")
const {getComm} = require("./Commands/get")
const {deleteComm} = require("./Commands/delete")
const commands = [createURLComm,allURLComm,analyticsComm,getComm,deleteComm];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})()