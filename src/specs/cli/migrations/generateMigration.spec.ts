import { Migrator } from "@/cli"

describe('Migrator', () => {
  it('reads config from fileconfig', () => {
    const connection = new Migrator()

    expect(connection).toBeTruthy()
  })
})
