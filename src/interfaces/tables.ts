import {Client} from "../client"
import {Column} from "../types"

export interface Table {
  tableName: string
  columns: Array<Column>
  commit: (client: Client) => Promise<void>
}
