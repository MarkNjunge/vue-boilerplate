/// <reference types="vite/client" />

// Required to avoid ComponentCustomProperties overriding
export {};

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "vue" {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
