const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('returns the ping of the bot'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};