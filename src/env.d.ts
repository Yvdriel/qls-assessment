/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    USERNAME: string;
    PASSWORD: string;
    BASE_URL: string;
    COMPANY_ID: string;
    BRAND_ID: string;
  }
}
