export type TClient = {
  raw: (val: string) => Promise<string>
  destroy: () => Promise<void>
  insert<T>(): Promise<Array<any> | T>
}
