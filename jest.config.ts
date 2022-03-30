export default {
  preset: 'ts-jest',
  verbose: false,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.spec.ts",
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
