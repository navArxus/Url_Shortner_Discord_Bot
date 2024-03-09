const { SlashCommandBuilder } = require('@discordjs/builders');

const pingCommand = new SlashCommandBuilder()
    .setName('get')
    .setDescription('Get the url')
    .addStringOption(option =>
        option.setName('id')
            .setDescription('Enter ID')
            .setRequired(true)); // Making this option not required allows the command to be used with or without additional text.

module.exports = { getComm: pingCommand.toJSON() };