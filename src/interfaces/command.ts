import { CommandInteraction, CommandInteractionOption } from 'discord.js';
import { SuperClient } from '../super-client';

export interface CommandArgs {
  client: SuperClient;
  interaction: CommandInteraction;
}

export interface Command {
  name: string;
  description: string;
  options: CommandInteractionOption[];
  execute: (args: CommandArgs) => Promise<unknown | void> | unknown | void;
}
