import {IDatabase} from "./interfaces";
import {ConfigOptions} from "./types";
import {Client} from "./client";
import knex from 'knex'

export class Database implements IDatabase {
  public config: ConfigOptions | null
  public client: null | Client

  constructor(config: ConfigOptions) {
    this.config = config
    this.client = null
  }

  async connect(): Promise<Client | Error> {
    const driver = knex<any, Record<string, any>[]>({
      client: 'pg',
      connection: this.config?.connection,
      ...this.config
    })

    this.client = new Client(driver)

    try {
      await this.isConnected()

      return this.client
    } catch (err) {
      return new Error(`Can't connect to database! ${err}`)
    }
  }

  async reconnect(config?: ConfigOptions): Promise<Client | Error> {
    const driver = knex<any, Record<string, any>[]>({
      client: 'pg',
      connection: config?.connection || this.config?.connection
    })

    this.client = new Client(driver)

    return this.client
  }

  async create(dbName: string): Promise<void> {
    await this.client?.raw(`CREATE DATABASE ${dbName};`)
  }


  async drop(dbName: string, options?: { withForce: boolean }): Promise<void> {
    if(options?.withForce) {
      await this.client?.raw(`DROP DATABASE IF EXISTS ${dbName} WITH (FORCE);`)
    } else {
      await this.client?.raw(`DROP DATABASE IF EXISTS ${dbName};`)
    }
  }

  async closeConnection(): Promise<void> {
    await this.client?.destroy().catch((err) => {
      console.log({ err })
    })
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
