import { Client, ClientOptions } from 'discord.js';
import { CommandsHandler } from './handlers/commands-handler';
import { EventsHandler } from './handlers/events-handler';

export class SuperClient extends Client {
  private readonly commandsHandler = new CommandsHandler(this);
  private readonly eventsHandler = new EventsHandler(this);

  constructor(options: ClientOptions) {
    super(options);
  }

  public async setup() {
    await this.commandsHandler.loadCommands();
    await this.eventsHandler.loadEvents();

    return await this.login(process.env.TOKEN);
  }

  public getCommands() {
    return this.commandsHandler.commands;
  }

  public getCommand(name: string) {
    return this.commandsHandler.commands.get(name);
  }
}
