const { SlashCommandBuilder } = require('@discordjs/builders');

const pingCommand = new SlashCommandBuilder()
    .setName('allurl')
    .setDescription('Get all URL')
     // Making this option not required allows the command to be used with or without additional text.

module.exports = { allURLComm: pingCommand.toJSON() };