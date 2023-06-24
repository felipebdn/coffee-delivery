import { stripe } from '../../../lib/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const ress = await stripe.shippingRates.list()
  return NextResponse.json({
    deliveryValue: ress.data[0].fixed_amount
      ? ress.data[0].fixed_amount?.amount / 100
      : 0,
  })
}
