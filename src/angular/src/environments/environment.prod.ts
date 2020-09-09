import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'MyTestProj',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44365',
    redirectUri: baseUrl,
    clientId: 'MyTestProj_App',
    responseType: 'code',
    scope: 'offline_access MyTestProj',
  },
  apis: {
    default: {
      url: 'https://localhost:44365',
    },
  },
} as Config.Environment;
