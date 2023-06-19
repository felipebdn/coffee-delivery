import { GraphQLClient } from 'graphql-request'
export { gql } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_URL as string,
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
