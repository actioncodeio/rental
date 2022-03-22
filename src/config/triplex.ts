import { IConnection } from "../interfaces/connection";
import { Connection } from "../types";

export class Triplex implements IConnection {
  db: Connection | null

  constructor(){
    this.db = null
  }
  async up(): Promise<Connection | null> {
    return this.db
  }
}
