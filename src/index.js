const Discord = require('discord.js');
const {config} = require('./config');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.author.bot || !message.content.startsWith(config.prefix)) return
  message.channel.send(`Olá, ${message.author.username}. Infelizmente ainda sou um(a) bot recém-nascidx, mas prometo que no futuro terei vários comandos lindos para você poder usar. ٩(◕‿◕｡)۶`);
});

client.login(config.token);