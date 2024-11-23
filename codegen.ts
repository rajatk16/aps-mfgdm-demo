import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      ['ENTER THE GRAPHQL URL']: {
        headers: {
          Authorization: 'Bearer <THREE LEGGED TOKEN>'
        }
      }
    }
  ],
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  },
  ignoreNoDocuments: true
};

export default config;
