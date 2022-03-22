import { Connection, ConnectionOptions } from "../types";

export interface IConnection {
  up: ({ databaseUrl, config }: ConnectionOptions) => Promise<Connection | null>
}
