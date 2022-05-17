require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 })
const { promisify } = require('util')
const { glob } = require('glob')
const PG = promisify(glob)
const ascii = require('ascii-table')

client.commands = new Discord.Collection()
client.event = new Discord.Collection();


client.login(process.env.TOKEN) 