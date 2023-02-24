import { readdirSync } from 'fs';
import { join } from 'path';
import { SuperClient } from 'src/super-client';
import { Event } from '../interfaces/event';

export class EventsHandler {
  constructor(private client: SuperClient) {}

  public async loadEvents() {
    const events = readdirSync(join(__dirname, '..', 'events'));
    for (const name of events) {
      const event = (await import(join(__dirname, '..', 'events', name))).default as Event;
      this.client.on(event.name, (...args) => event.execute(this.client, ...args) as any);
    }
  }
}
