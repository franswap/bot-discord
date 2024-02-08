const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
          intents: 
            [
              IntentsBitField.Flags.Guilds,
              IntentsBitField.Flags.GuildMembers,
              IntentsBitField.Flags.GuildMessages,
              IntentsBitField.Flags.MessageContent,
            ],
        });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {

    if(message.author.bot) {
      return
    }

    if(message.content == message.content) {
    console.log(message.content)
    message.reply(message.content)
    }
})

client.on('interactionCreate', (interraction) => {
  if(!interraction.isChatInputCommand()) return;

  if(interraction.commandName === 'hey') {
    interraction.reply('hey');
  }
  if(interraction.commandName === 'ping') {
    interraction.reply('pong');
  }
  if(interraction.commandName === 'add') {
    const num1 = interraction.options.get('first-number').value;
    const num2 = interraction.options.get('second-number').value;
    var result = num1 + num2;
    interraction.reply('incroyable ' + num1 + ' + ' + num2 + ' font ' + result);
  }
  
})

client.login(process.env.TOKEN);
