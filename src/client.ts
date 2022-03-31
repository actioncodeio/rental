import {IClient} from "./interfaces";

export class Client implements IClient {
  async raw(query: string): Promise<string> {
    return query
  }

  async destroyConnection(): Promise<void> {
  }
}
