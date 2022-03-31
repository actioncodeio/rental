import {Knex} from "knex";
import {IClient} from "./interfaces";

export class Client implements IClient {
  driver: Knex

  constructor(driver: Knex) {
    this.driver = driver
  }

  async raw(query: string): Promise<string> {
    await this.driver.raw(query)
    return query
  }

  async insert(): Promise<Error> {
    throw new Error('Must implement it')
  }

  async destroy() {
    await this.driver.destroy().catch((err) => {
      console.log({ err })
    })
  }

  async destroyConnection(): Promise<void> {
  }
}
