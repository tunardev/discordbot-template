import 'dotenv/config';
import { GatewayIntentBits } from 'discord.js';
import { SuperClient } from './super-client';

const client = new SuperClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.init();
