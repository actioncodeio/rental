export type ConnectionConfig = {
  port: number
  host: string
  database: string
  driver: 'pg'
  migrationsFolder?: string
  tenantMigrationsFolder?: string
}

export type ConnectionOptions = {
  databaseUrl: string
  config: ConnectionConfig
}

export type Connection = {}
