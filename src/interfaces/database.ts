import {Client, ConfigOptions} from "../types"

export interface IDatabase {
  config: ConfigOptions | null
  connect: () => Promise<Client | Error>
  isConnected: () => Promise<Boolean | Error>
  client: null | Client
}
