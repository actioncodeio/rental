import { ConnectionConfig } from "./src/types";

exports = {
  driver: 'pg',
  port: 5432,
  database: 'some-database',
  user: 'docker',
  password: 'docker',
  host: 'localhost',
  migrationsFolder: './src/db/migrations',
  tenantMigrationsFolder: './src/db/tenantMigrations'
} as ConnectionConfig
