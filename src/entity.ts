export class Entity<T> {
  async insert(options: T): Promise<void>{
    console.log('chegou aqui', options)
  }
}



type TUser = {
  id: number
  name: string
}

export class User extends Entity<User> {
  public id: number | undefined
  public name: string | undefined

  constructor({ id, name }: TUser) {
    super()
    this.id = id
    this.name = name
  }
}
