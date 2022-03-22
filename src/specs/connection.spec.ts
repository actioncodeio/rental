import { Triplex } from "../config"

describe('Connection', () => {
  it('returns db connection', () => {
    const connection = new Triplex()

    expect(connection.db).toBeTruthy()
  })
})
