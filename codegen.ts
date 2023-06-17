import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cliyz37df0f0r01t61ss39qrr/master',
  documents: 'src/graphql/queries/*.graphql',
  generates: {
    'src/generated/': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix'],
  },
}

export default config
