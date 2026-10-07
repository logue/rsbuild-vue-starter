interface ImportMetaEnv {
  readonly APP_VERSION: string;
  readonly BUILD_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.css';
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    unknown
  >;
  export default component;
}

/*
// Example when you are using rsbuild-plugin-yaml, comment out below:
declare module '*.yml' {
  const content: Record<string, any>;
  export default content;
}
declare module '*.yaml' {
  const content: Record<string, any>;
  export default content;
}
*/
