/** For build demo site use. */

import { defineConfig } from '@rsbuild/core';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginVue } from '@rsbuild/plugin-vue';

import { readFileSync } from 'node:fs';

import { pluginVueDevTools } from '@vue-devtools-rstack/rsbuild';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  version: string;
};

const buildDate = new Date().toISOString();

export default defineConfig({
  plugins: [
    pluginTypeCheck(),
    pluginVue(),
    pluginVueDevTools(),
  ],
  html: {
    template: './src/index.html',
  },
  source: {
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      __BUILD_DATE__: JSON.stringify(buildDate),
    },
    include: [
      './src',
    ],
    tsconfigPath: './tsconfig.rsbuild.json',
  },
});
