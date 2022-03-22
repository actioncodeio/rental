import { Migrator } from "@/cli"

describe('Migrator', () => {
  it('reads config from triplex.config', () => {
    const connection = new Migrator('../../')

    expect(connection).toBeTruthy()
  })
})
