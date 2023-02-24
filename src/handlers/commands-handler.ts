import { Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { SuperClient } from '../super-client';
import { Command } from '../interfaces/command';

export class CommandsHandler {
  public commands = new Collection<string, Command>();

  constructor(private client: SuperClient) {}

  public async loadCommands() {
    const commandsFiles = readdirSync(join(__dirname, '..', 'commands'));
    for (const name of commandsFiles) {
      const command = (await import(join(__dirname, '..', 'commands', name))).default as Command;
      this.commands.set(command.name, command);
    }
  }
}
