const { Client, IntentsBitField, ActivityType, EmbedBuilder } = require('discord.js');
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


let status = [
  {
    name: "manger des pommes de terre",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
  },
  {
    name: "dormir",
    type: ActivityType.Listening,
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
  },
  {
    name: "jouer",
    type: ActivityType.Watching,
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
  }
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random])
  }, 10000)

});

client.on('messageCreate', (message) => {

  if (message.author.bot) {
    return
  }

  if (message.content == message.content) {
    console.log(message.content)
    message.reply(message.content)
  }
})

client.on('interactionCreate', (interraction) => {
  if (!interraction.isChatInputCommand()) return;

  if (interraction.commandName === 'hey') {
    interraction.reply('hey');
  }
  if (interraction.commandName === 'ping') {
    interraction.reply('pong');
  }
  if (interraction.commandName === 'add') {
    const num1 = interraction.options.get('first-number').value;
    const num2 = interraction.options.get('second-number').value;
    var result = num1 + num2;
    interraction.reply('incroyable ' + num1 + ' + ' + num2 + ' font ' + result);
  }
  if (interraction.commandName === 'card') {
    const card = new EmbedBuilder()
      .setTitle('card')
      .setDescription('ceci est une carte')
      .addFields(
        {
          name: 'one field',
          value: 'one',
          inline: true,
        },
        {
          name: 'two field',
          value: 'two',
          inline: true,
        }
      )
      .setColor('Random');

    interraction.reply({ embeds: [card] });
  }

});

client.login(process.env.TOKEN);
