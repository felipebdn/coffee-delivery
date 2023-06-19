import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cliyz37df0f0r01t61ss39qrr/master',
  {
    headers: {
      Authorization: `Bearer ${
        process.env.NEXT_PUBLIC_HYGRAPH_TOKEN as string
      }`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
)
