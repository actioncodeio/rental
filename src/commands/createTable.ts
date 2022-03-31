import {Client} from "../client"
import {Table} from "../interfaces/tables"
import {Column, ColumnType, TableData} from "../types"

export class CreateTable implements Table {
  public tableName: string
  public schemaName?: string
  public columns: Array<Column>;

  constructor(tableData: TableData){
    this.tableName = tableData.name
    this.columns = tableData.columns
    this.schemaName = tableData.schemaName
  }

  async commit(client: Client): Promise<void> {
    if(this.schemaName) {
      await client.raw(`
        CREATE TABLE "${this.schemaName}"."${this.tableName}";
      `)
    }

    await client.raw(`CREATE TABLE
      IF NOT EXISTS ${this.tableName} (
        ${this.buildColumns()}
      );
    `)
  }


  private buildColumns() {
    const getType = (type: ColumnType) => {
      switch (type) {
        case 'string':
          return 'varchar(255)'
        default:
      }
    }

    const build = this.columns.map(
      (item: Column) => `${item.name} ${getType(item.type)}`
    )

    return build.join(",")
  }
}
