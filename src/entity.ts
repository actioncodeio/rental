import { getClient } from './rental'

export class Repo<T> {
  async insert(options: T): Promise<T>{
    const client = await getClient()

    if(client) {
      await client.insert()
    }

    return options as T
    // throw new Error('Must implement it')
  }
}

