import {Database} from "./database";
import {Client, ConfigOptions} from "./types";

export let database: Database;
export let client: Client | null;
export let configOptions: ConfigOptions = {
  connection: {
    host: 'localhost',
    port: 5422,
    user: 'docker',
    password: 'docker',
    databaseName: 'condos_db_dev',
  }
}

export async function startDb() {
  database = new Database(configOptions)
  await database.connect()
}

export async function getClient() {
  if(await database?.isConnected()) {
    return client = database.client
  }
}
