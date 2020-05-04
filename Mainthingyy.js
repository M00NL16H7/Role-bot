// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const config = require('./config.json');

const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
//does something
client.on('message', message => {
  if (message.content === '$ping') {
  	// send back "Pong." to the channel the message was sent in
  	message.channel.send('Pong.');
  }
if (message.content === '$$$$ping') {
  message.channel.send('u are big gey if find this')
}
});
// login to Discord with your app's token
client.login('NjYxMzA3NzAwMDA0NzgyMDgx.Xq22ng.GLm6h2VPD3OJOOpwPrj5yr7Pu_4');
