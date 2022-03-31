export type Client = {
  raw: (val: string) => Promise<string>
  destroy: () => Promise<void>
}

