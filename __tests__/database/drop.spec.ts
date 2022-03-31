import {Client} from '../../src/client'
import {CreateTable} from '../../src/commands'
import {Database} from '../../src/database'
import {configOptions } from '../support/connectToDB.support'

describe('Database', () => {
  it('creates a new database', async() => {
    const dbName = 'DATABASE_NAME_NEW_2'.toLowerCase()
    const db = new Database(configOptions)

    await db.connect()
    await db.drop(dbName, { withForce: true })
    await db.create(dbName)
    await db.closeConnection()

    const newClient = await db.reconnect({
      ...configOptions,
      connection: {
        ...configOptions.connection,
        database: dbName
      }
    })

    const createTable = new CreateTable({
      name: 'test_users_spec',
      columns: [
        {
          name: 'name',
          type: 'string'
        }
      ]
    })

    if(newClient instanceof Client) {
      await createTable.commit(newClient)
    }
  })
})
