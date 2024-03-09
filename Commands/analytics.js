const { SlashCommandBuilder } = require('@discordjs/builders');

const pingCommand = new SlashCommandBuilder()
    .setName('analytics')
    .setDescription('Get count of url visit')
    .addStringOption(option =>
        option.setName('url')
            .setDescription('Enter URL')
            .setRequired(true)); // Making this option not required allows the command to be used with or without additional text.

module.exports = { analyticsComm: pingCommand.toJSON() };