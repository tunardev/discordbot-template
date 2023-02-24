import { Client, ClientOptions } from 'discord.js';
import { CommandsHandler } from './handlers/commands-handler';
import { EventsHandler } from './handlers/events-handler';

export class SuperClient extends Client {
  private readonly commandsHandler = new CommandsHandler(this);
  private readonly eventsHandler = new EventsHandler(this);

  constructor(options: ClientOptions) {
    super(options);
  }

  public async init() {
    await this.commandsHandler.loadCommands();
    await this.eventsHandler.loadEvents();

    const token = await this.login(process.env.TOKEN);
    return token;
  }

  public getCommands() {
    return this.commandsHandler.commands;
  }

  public getCommand(name: string) {
    return this.commandsHandler.commands.get(name);
  }
}
