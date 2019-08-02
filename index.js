const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config.json");

const BLACKLISTED_USER_ID = "256769735641792512";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name == "⭐" && reaction.message.author.id == BLACKLISTED_USER_ID) {
        reaction.remove(user).then(reaction => {
            console.log('Removed star.');
        });    
    }
});

try {
    client.login(config.token);
}
catch (error) {
    console.log("Error logging in");
}
