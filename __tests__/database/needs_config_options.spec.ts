import { Database } from '../../src/database'
import {ConfigOptions} from '../../src/types'

describe('Database', () => {
  it('connects to database', async () => {
    const configOptions: ConfigOptions = {
      connection: {
        host: 'localhost',
        port: 5422,
        user: 'docker',
        password: 'docker',
        databaseName: 'condos_db_dev',
      }
    }
    const db = new Database(configOptions)

    await db.connect()

    expect(await db.isConnected()).toEqual(true)
    expect(db.client).not.toBeNull()
    expect(db.config).toMatchObject(configOptions)
  })

  it('desconnects from database when .closeConnection', async () => {
    const configOptions: ConfigOptions = {
      connection: {
        host: 'localhost',
        port: 5422,
        user: 'docker',
        password: 'docker',
        databaseName: 'condos_db_dev',
      }
    }
    const db = new Database(configOptions)

    await db.connect()

    if (await db.isConnected()) {
      await db.closeConnection()

      expect(await db.isConnected()).toEqual(false)
    }
  })

  it.skip('throws error if no ConfigOptions is found', () => {
  })
})
