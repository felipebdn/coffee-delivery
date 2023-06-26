import { stripe } from '../../../lib/client'
import Stripe from 'stripe'
import { coffeesInCartTypes } from '@/reducers/coffees/reducer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const {
    coffees,
  }: // payMethods,
  {
    coffees: coffeesInCartTypes[]
    // payMethods: 'money' | 'debit' | 'credit'
  } = await req.json()

  if (req.method !== 'POST') {
    return NextResponse.error()
  }
  if (!coffees) {
    return NextResponse.error()
  }

  const successUrl = `${process.env.URL_APPLICATION}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.URL_APPLICATION}/`

  const params: Stripe.Checkout.SessionCreateParams = {
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: coffees.map((coffee) => ({
      price: coffee.priceId,
      quantity: coffee.amountCoffees,
    })),
    shipping_options: [
      {
        shipping_rate: 'shr_1NMZt1HJbKqRslmmrbwQJWhg',
      },
    ],
    // payment_method_types: payMethods === 'credit' ? ['card'] : [],
  }
  const checkoutSession = await stripe.checkout.sessions.create(params)

  return NextResponse.json({
    checkoutUrl: checkoutSession.url,
  })
}
