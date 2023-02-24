import { SuperClient } from '../super-client';
import { Event } from '../interfaces/event';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Command } from '../interfaces/command';

const ReadyEvent: Event = {
  name: 'ready',
  execute: (client: SuperClient) => {
    const rest = new REST({ version: '9' }).setToken(client.token as string);

    (async () => {
      try {
        await rest.put(Routes.applicationCommands(client.user?.id as string), {
          body: client.getCommands().map((command: Command) => {
            return {
              name: command.name,
              description: command.description,
              options: command.options
            };
          })
        });
      } catch (error) {
        console.error(error);
      }
    })();

    console.log(`Logged in as ${client.user?.username}!`);
  }
};

export default ReadyEvent;
