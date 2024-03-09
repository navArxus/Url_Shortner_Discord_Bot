const { SlashCommandBuilder } = require('@discordjs/builders');

const pingCommand = new SlashCommandBuilder()
    .setName('create')
    .setDescription('Create short URL')
    .addStringOption(option => 
        option.setName('create')
        .setDescription('Enter URL')
        .setRequired(false)); // Making this option not required allows the command to be used with or without additional text.

module.exports = { createURLComm: pingCommand.toJSON() };