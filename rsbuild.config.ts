import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'node:fs';

import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginVueDevTools } from '@vue-devtools-rstack/rsbuild';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  name: string;
  version: string;
};
const buildDate = new Date().toISOString();

console.debug('Injected version:', pkg.version);
console.debug('Injected build date:', buildDate);

export default defineConfig({
  plugins: [pluginTypeCheck(), pluginVue(), pluginVueDevTools()],
  html: {
    template: './index.html',
  },
  source: {
    tsconfigPath: './tsconfig.rsbuild.json',
    include: ['./src'],
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      __BUILD_DATE__: JSON.stringify(buildDate),
    },
    entry: {
      index: './src/main.ts',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
