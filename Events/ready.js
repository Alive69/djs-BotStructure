const mongoDB = require(process.env.mongoDB)
const { Client } = require('discord.js')

/**
 * @param { Client } client
 */

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`)
    client.user.setActivity('Netcord', { type: 'WATCHING' })
})