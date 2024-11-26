import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({
  //! For the sake of the assessment, I normally use ENV variables for these kind of things ;)
  baseURL: 'https://api.pakketdienstqls.nl/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
