import {Column} from "./column"

export type TableData = {
  name: string
  columns: Array<Column>
  schemaName?: string
}
