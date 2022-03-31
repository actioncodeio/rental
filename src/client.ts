import {IClient} from "./interfaces";

export class Client implements IClient {
  async raw(query: string): Promise<string> {
    return query
  }

  async insert(): Promise<Error> {
    throw new Error('Must implement it')
  }

  async destroyConnection(): Promise<void> {
  }
}
