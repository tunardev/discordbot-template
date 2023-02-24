import { Command } from '../interfaces/command';

const PingCommand: Command = {
  name: 'ping',
  description: 'Ping!',
  options: [],
  execute: ({ client, interaction }) => {
    interaction.reply({
      content: `Pong! ${client.ws.ping}ms`,
      ephemeral: true
    });
  }
};

export default PingCommand;
