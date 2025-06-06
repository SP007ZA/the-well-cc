import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/api/graphql",
  documents: "data/graphql/**/*.graphql",
  generates: {
    "data/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;