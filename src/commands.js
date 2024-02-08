const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'hey',
        description: 'reponse avec hey',
    },
    {
      name: 'ping',
      description: 'partie de ping pong',
  },
  {
    name: 'add',
    description:'ajoute des nombres',
    options: [
      {
        name: 'first-number',
        description: 'first number',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'second-number',
        description: 'second number',
        type: ApplicationCommandOptionType.Number,
        // on peut aussi ajouter des choices avec un array name et value.
        required: true,
      },
    ],
  },
];

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
  
  try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
