const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const fs = require('fs');
require('dotenv').config();

client.commands = new Discord.Collection();

const handlers = fs.readdirSync('./src/Handlers').filter(file => (file.endsWith('.js')));
const commandFolders = fs.readdirSync('./src/Commands');
const eventFiles = fs.readdirSync('./src/Events').filter(file => (file.endsWith('.js')));

(async () => {
    for(file of handlers) {
        require(`./Handlers/${file}`)(client);
    }
    client.handleEvents(eventFiles, './src/Events');
    client.handleCommands(commandFolders, './src/Commands');
    client.login(process.env.TOKEN);
})();
