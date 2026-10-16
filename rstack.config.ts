import { readFileSync } from 'node:fs';

import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginVue } from '@rsbuild/plugin-vue';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginVueDevTools } from '@vue-devtools-rstack/rsbuild';
import { define } from 'rstack';

/** Parse package.json content */
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  name: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  license: string;
  version: string;
  homepage: string;
};

const buildDate = new Date().toISOString();

const createBuildDefines = () => ({
  'import.meta.env.APP_VERSION': JSON.stringify(pkg.version),
  'import.meta.env.BUILD_DATE': JSON.stringify(buildDate)
});

/**
 * Rsbuild (Demo application) config
 * @see {@link https://rsbuild.rs/config | Rsbuild Config}
 */
define.app({
  plugins: [pluginTypeCheck(), pluginVue(), pluginVueDevTools()],
  output: {
    assetPrefix: './',
    filenameHash: true
  },
  html: {
    title: pkg.name,
    template: './src/index.html'
  },
  performance: {
    buildCache: false
  },
  source: {
    define: createBuildDefines(),
    entry: {
      index: './src/main.ts'
    },
    include: ['./src'],
    tsconfigPath: './tsconfig.rsbuild.json'
  },
  tools: {
    bundlerChain: (chain, { CHAIN_ID }) => {
      chain.plugin('Rsdoctor').use(
        RsdoctorRspackPlugin as never,
        [
          // plugin options
          // @see https://rsdoctor.rs/config/options/options
        ] as never
      );
    }
  }
});

define.test({
  testEnvironment: 'happy-dom',
  source: {
    tsconfigPath: './tsconfig.rstest.json'
  }
});

/**
 * Git hooks
 * @see {@link https://rstack.rs/guide/cli/hooks | Git Hooks}
 */
define.staged({
  '*.{js,jsx,ts,tsx,vue,mjs,cjs,mts,cts}': ['oxlint --fix', 'oxfmt fmt'],
  '*.{json,jsonc,md,mdx,css,scss,less,html,yml,yaml}': 'oxfmt fmt'
});
