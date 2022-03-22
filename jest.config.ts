import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testMatch: [
    "**/src/specs/**/*.spec.ts"
  ],
  moduleNameMapper: {
    "@/(.*)": '<rootDir>/src/$1'
  }
};


export default config
