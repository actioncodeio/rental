import {Client} from '../../src/client'
import { Database } from '../../src/database'
import { ConfigOptions } from '../../src/types'

export const configOptions: ConfigOptions = {
  connection: {
    host: 'localhost',
    port: 5422,
    user: 'docker',
    password: 'docker',
  }
}

export let db = new Database(configOptions)

export async function startDB(): Promise<Client | Error> {
  return await db.connect()
}

export async function closeDB() {
  await db.closeConnection()
}
