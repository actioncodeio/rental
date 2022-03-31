import { Entity, User } from '../../src/entity'

describe('Entity', () => {
  it('must receive an Entity', async () => {
    const user = new User({ id: 123, name: "mateus" })
    const repo = new Entity()
    repo.insert(user)
  })
})

