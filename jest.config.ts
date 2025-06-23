import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // necessário para ESM + TypeScript
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // remove extensão `.js` nos imports relativos
  },
  testTimeout: 60000, // 60 segundos
  setupFilesAfterEnv: ['./tests/testSetup.ts'], // arquivo de configuração global para testes
};

export default config;
