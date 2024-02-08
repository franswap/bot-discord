const { Client, IntentsBitField, ButtonBuilder, ActivityType, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
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

const roles = [
    {
        id: '1011202566710906940',
        label: 'PETIT Q 🍑'
    },
    {
        id: '1011202871628419162',
        label: 'GROS Q 🍑'
    },
    {
        id: '1012227878525603864',
        label: 'Q MOU 🍑'
    },
    {
        id: '1011202695979352114',
        label: '🍑 Q MOYEN'
    }
]


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

client.on('ready', async (c) => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random])
  }, 10000)

  try {
    const channel = await client.channels.cache.get('954143287135060101');
    if(!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
        row.components.push(
            new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
        )
    })

    await channel.send({
        content: 'Choisi un role ou remove en un !',
        components: [row]
    });

    process.exit();
  } catch (e) { 
    console.log(e);
  }
});

client.login(process.env.TOKEN);
