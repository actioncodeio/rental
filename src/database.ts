import {IDatabase} from "./interfaces";
import {Client, ConfigOptions} from "./types";
import knex from 'knex'

export class Database implements IDatabase {
  public config: ConfigOptions | null
  public client: null | Client

  constructor(config: ConfigOptions) {
    this.config = config
    this.client = null
  }

  async connect(): Promise<Client | Error> {
    const driver = knex({
      client: 'pg',
      connection: this.config?.connection
    }) as unknown

    this.client = driver as Client

    try {
      await this.isConnected()

      return this.client
    } catch (err) {
      return new Error(`Can't connect to database! ${err}`)
    }
  }

  async closeConnection(): Promise<void> {
    await this.client?.destroy()
  }

  async isConnected(): Promise<Boolean> {
    try {
      await this.client?.raw("SELECT 1")
      return true
    } catch (err) {
      return false
    }
  }
}
