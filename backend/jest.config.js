const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: ['<rootDir>'],
  globalSetup: './test/globalSetup.ts',
  setupFilesAfterEnv: ['./test/setup.ts'],
}
