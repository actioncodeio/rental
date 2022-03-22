import { readFileSync } from "fs"

export class Migrator {
  configFile: string
  migrationsSource: string

  constructor(path: string){
    this.configFile = path
    this.migrationsSource = this.getMigrationsSource()
  }


  getMigrationsSource(): string {
    const file = readFileSync(this.configFile, { encoding: 'utf8' })
    const { migrationsFolder } = JSON.parse(file)

    return migrationsFolder
  }
}
