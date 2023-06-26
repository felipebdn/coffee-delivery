import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get('sessionId')

  return NextResponse.json({
    data: sessionId,
  })
}
