import { createClient, ssrExchange, cacheExchange, fetchExchange } from 'urql'

const isServerSide = typeof window === 'undefined'

const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-sa-east-1.hygraph.com/v2/cliyz37df0f0r01t61ss39qrr/master',
  exchanges: [cacheExchange, ssrCache, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
  },
})

export { client, ssrCache }
