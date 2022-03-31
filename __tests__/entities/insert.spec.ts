import { Repo } from '../../src/entity'
import { client } from '../../src/rental'

jest.mock('../../src/rental', () => {
  const fn = jest.fn().mockImplementation(() => ({}))
  return {
    client: {
      insert: fn
    },
    getClient: jest.fn().mockImplementation(() => ({
      insert: fn
    }))
  }
})

type TUser = {
  id?: number
  name: string
}

export class StubUser {
  public id: number | undefined
  public name: string | undefined

  constructor({ id, name }: TUser) {
    this.id = id
    this.name = name
  }
}

describe('Repo', () => {
  it('must receive an Entity', async () => {
    const user = new StubUser({ name: "mateus" })
    const repo = new Repo<StubUser>()

    const result = await repo.insert(user)

    expect(result).toBeInstanceOf(StubUser)
    expect(result.name).toBe(user.name)
    expect(client?.insert).toHaveBeenCalled()
  })
})

