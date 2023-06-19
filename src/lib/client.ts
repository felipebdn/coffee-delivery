import {graphql} from '../codegen'

const GetTest = graphql(`query Teste {
  coffeesPlural {
    createdAt
    name
    id
    price
    typeCoffeesPlural(orderBy: typeName_ASC) {
      createdAt
      id
      typeName
    }
  }
}`)

// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
//       headers: {
//         Authorization: `Bearer ${
//           process.env.NEXT_PUBLIC_HYGRAPH_TOKEN as string
//         }`,
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     }),
//   })
// })
