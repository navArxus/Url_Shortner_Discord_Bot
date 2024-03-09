const { SlashCommandBuilder } = require('@discordjs/builders');

const pingCommand = new SlashCommandBuilder()
    .setName('delete')
    .setDescription('Deactivate the url')
    .addStringOption(option =>
        option.setName('url')
            .setDescription('Enter ID')
            .setRequired(true)); // Making this option not required allows the command to be used with or without additional text.

module.exports = { deleteComm: pingCommand.toJSON() };