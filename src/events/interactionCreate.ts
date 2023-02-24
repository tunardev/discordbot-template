import { Interaction } from 'discord.js';
import { SuperClient } from '../super-client';
import { Event } from '../interfaces/event';

const InteractionCreateEvent: Event = {
  name: 'interactionCreate',
  execute: (client: SuperClient, interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.getCommand(interaction.commandName);
    if (!command) return;

    try {
      command.execute({ client, interaction });
    } catch (error) {
      console.error(error);

      interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true
      });
    }
  }
};

export default InteractionCreateEvent;
