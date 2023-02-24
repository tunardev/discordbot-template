import { SuperClient } from '../super-client';

export interface Event {
  name: string;
  execute: (client: SuperClient, ...args: any[]) => Promise<unknown | void> | unknown | void;
}
