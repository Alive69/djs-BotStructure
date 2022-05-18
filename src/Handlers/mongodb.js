const mongoose = require('mongoose');
const fs = require('fs')
const mongoEventFiles = fs.readdirSync('./src/MongoEvents').filter(file => file.endsWith('.js'));

module.exports = (client) => {
    client.dbLogin = async () => {
        for(file of mongoEventFiles) {
            const event = require(`../MongoEvents/${file}`);
            if (event.once) {
                mongoose.connection.once(event.name, (...args) => event.execute(...args));
            } else {
                mongoose.connection.on(event.name, (...args) => event.execute(...args));
            }
        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.MONGODB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    };
};