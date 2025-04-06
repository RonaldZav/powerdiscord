#!/usr/bin/env node

const args = process.argv.slice(2);
const PowerDiscord = require('../lib/PowerDiscord');

if (args[0] === 'start') {
    const bot = new PowerDiscord();
    bot.connect().catch(err => {
        console.error('Error starting the bot:', err);
    });
} else {
    console.log('Unrecognized command. Use: powerdiscord start');
}
