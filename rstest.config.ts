import { withRsbuildConfig } from '@rstest/adapter-rsbuild';
import { defineConfig } from '@rstest/core';

// Docs: https://rstest.rs/config/
export default defineConfig({
  extends: withRsbuildConfig(),
  testEnvironment: 'happy-dom',
  source: {
    tsconfigPath: './tsconfig.rstest.json',
  },
});
