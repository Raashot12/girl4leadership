const config = {
  schemaFile: 'http://api.plateaumed-dev.com/swagger/v1/swagger.json',
  apiFile: './src/state/services/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/state/services/tokenAuthApi.ts': {
      filterEndpoints: [/TokenAuth/i],
      exportName: 'tokenAuthApi',
    },
  },
  hooks: true,
};

export default config;
