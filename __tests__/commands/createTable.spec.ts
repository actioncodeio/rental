import {Client} from '../../src/client'
import { CreateTable } from '../../src/commands'
import { startDB, closeDB } from '../support/connectToDB.support'

describe('CreateTable', () => {
  afterEach(async() => await closeDB())

  it('creates a table based on entity columns', async () => {
    const createTable = new CreateTable({
      name: 'users_spec',
      columns: [
        {
          name: 'name',
          type: 'string'
        }
      ]
    })
    const client = await startDB()

    if(client instanceof Client) {
      createTable.commit(client)
    }
  })
})
