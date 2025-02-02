/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFilesAfterEnv: ['./singleton.ts'],
}