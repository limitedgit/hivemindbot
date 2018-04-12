const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", async message => {
    
    const args = message.content.slice("!".length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'hi') {
    	message.reply('hi');
  	}
    if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
});

client.login(process.env.BOT_TOKEN);
