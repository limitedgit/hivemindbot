const Discord = require('discord.js');
const client = new Discord.Client();
const k = require("./config.json");

client.on('ready', () => {
    console.log('My Body is ready!');
});

client.on("message", async message => {
    if(message.author.bot) return;
    const args = message.content.slice(k.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'hi') {
    	message.reply('hi');
  	}
    
    if (message.content.startsWith(k.prefix) === false) return;
    if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
    }
    if (command === "server"){
    message.channel.send(`welcome to ${message.guild.name}`)
    }
    if(command === "purge") {
    const deleteCount = parseInt(args[0]) + 1;
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2 - 99 please");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
});

client.login(process.env.BOT_TOKEN);
