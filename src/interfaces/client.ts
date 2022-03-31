type QueryOptions = {
}

export interface IClient {
  raw: (val: string) => Promise<string>
  destroyConnection: () => Promise<void>
}

