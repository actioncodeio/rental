import { Database } from '../../src/database'

describe('Database', () => {
  it('connects to database', async () => {
    const configOptions = {}
    const db = new Database(configOptions)

    await db.connect()

    expect(await db.isConnected()).toEqual(true)
    expect(db.config).toMatchObject(configOptions)
    expect(db.config.connect.host).toMatchObject('localhost')
    expect(db.client).not.toBeNull()
  })
})
