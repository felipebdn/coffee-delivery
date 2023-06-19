/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HYGRAPH_TOKEN:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODcxNDU3MDcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xpeXozN2RmMGYwcjAxdDYxc3MzOXFyci9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzEyYzcwZmEtZWYwYS00MjQ0LWEyNzQtZGYxNjkwMDUxMWUxIiwianRpIjoiY2xqMmF6cmVtMXgyYTAxdW1iOHhmYWw1ZyJ9.uWtBwFAxuPAczpYErwTOxc5TVh4iXXMHP2LKUDiDCSqHcAx525DJWnrwAh3AbRrPDJm0N8_k6OKXmins8Zn41Zkdok7O2s3YYlyqok4X4lBqQTiHfgl0FqY8hvbiHYzTz4_uLAwn2UZhbFAsVTlMKWWL727wFmalmSiJYFKGurj3AcAN5QmStEBCtnXmpWhClGHEGlzKrWsK5_EGYg1gCKcJDl-1vwN_fXQn-klkx93f4rshpYHABIQGP7pap30jLZLp-OHAHGwfq9sjgOgyPTrHNs-lUa5QixrWnB9jTmgxc50zmXuf-nLy-4GABLnjlyEZ-7US5daQYj6nu3YEEYrlDyjJzGmRLkyXdA70_fjzHjdgeBXkL4MHVcEKtiuqlrWdNfP8gmW5-TojkOyYgyxoOqxx-i7HP9GyPLu4UWQ54ssx4pt46ModS11wOMpYkJ1Rmo1GUqreUTpHXWUHwhx5BmzaCFLKHTPzzt7U-QAErbRuTlIXY4u6e43RYipHab4yWR8PtPZNHl0kY4p5bQkNbgeQai72iX3WfJfusWjhyJzRFwlRaOk7912xz6AZiyAN3R4_giam--003OBNZbIaBg7ViiqrH3TPLUoD7Boqc35FpzW821wzDlkijjOYnZEpI_FITbLjzcL3JropRvCjxT7Yh1hGPFLY5mUXp70',
    NEXT_PUBLIC_HYGRAPH_URL:
      'https://api-sa-east-1.hygraph.com/v2/cliyz37df0f0r01t61ss39qrr/master',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.graphassets.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
