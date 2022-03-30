import {IDatabase} from "./interfaces";
import {Client, ConfigOptions} from "./types";
import knex from 'knex'

export class Database implements IDatabase {
  public config: ConfigOptions | null
  public client: null | any

  constructor(config: ConfigOptions) {
    this.config = config
    this.client = null
  }

  async connect(): Promise<Client | Error> {
    this.client = knex({
      client: 'pg',
      connection: this.config?.connection
    })

    try {
      await this.client.raw("SELECT 1")

      return this.client
    } catch (err) {
      new Error(`Can't connect to database! ${err}`)
      return false
    }
  }

  async closeConnection(): Promise<void> {
  }

  async isConnected(): Promise<Boolean | Error> {
    try {
      return await this.client.raw("SELECT 1").then(() => {
        return true
      })
    } catch (err) {
      return new Error(`Database is not connected! ${err}`)
    }
  }
}
