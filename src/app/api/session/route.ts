import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log(res)

  return {
    data: 'teste',
  }
}
