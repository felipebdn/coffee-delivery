'use client'
import './styles.css'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DollarSign, MapPin } from 'lucide-react'
import { useContext, useState } from 'react'
import { Root as RootDialog } from '@radix-ui/react-dialog'

import { FormChekout } from './FormCheckout'
import { CoffeeInCart } from '@/components/coffeesInCart'
import { CheckoutValues } from './CheckoutValues'
import { PaymentMethods } from './PaymentMethods'
import { coffeeContext } from '@/context/coffeesContext'
import { ModalSuccess } from '@/components/ModalSuccess'
import axios from 'axios'
import { coffeesFormContext } from '@/context/coffeeFormContext'

const checkoutSchema = zod.object({
  cep: zod.string().min(8).max(8),
  rua: zod.string().nonempty(),
  numero: zod.number().min(1),
  complemento: zod.string(),
  bairro: zod.string().nonempty(),
  cidade: zod.string().nonempty(),
  uf: zod.string().min(2).max(2).toUpperCase(),
  methodPayment: zod.enum(['money', 'debit', 'credit']),
})

export type CheckoutTypes = zod.infer<typeof checkoutSchema>

export default function Checkout() {
  const formCheckout = useForm<CheckoutTypes>({
    resolver: zodResolver(checkoutSchema),
  })
  const [open, setOpen] = useState(false)
  const { cartCoffees } = useContext(coffeeContext)
  const { handleDataForm } = useContext(coffeesFormContext)
  const {
    handleSubmit,
    formState: { errors },
  } = formCheckout

  async function teste(data: CheckoutTypes) {
    try {
      handleDataForm(data)
      const res = await axios.post('/api/checkout', {
        coffees: cartCoffees,
        payMethods: data.methodPayment,
      })

      const { checkoutUrl } = res.data

      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="grid grid-cols-5 gap-8 max-[960px]:flex max-[960px]:flex-col-reverse">
      <div className="col-span-3 flex flex-col gap-3">
        <h3 className="mb-1 font-ballo2 text-lg font-bold leading-tight text-base-subtitle">
          Complete seu pedido
        </h3>
        <div className="flex flex-col gap-8 rounded-md bg-base-card p-10">
          <header className="flex gap-2">
            <MapPin className="text-yellow-dark" size={22} />
            <div>
              <h4 className="text-base font-normal leading-tight text-base-subtitle">
                Endereço de Entrega
              </h4>
              <p className="text-sm font-normal leading-tight text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          {(errors.bairro ||
            errors.cep ||
            errors.cidade ||
            errors.numero ||
            errors.rua ||
            errors.uf) && (
            <p className="flex text-xs font-bold leading-tight text-error-color">
              Preencha todos os campos obrigatórios
            </p>
          )}
          <FormProvider {...formCheckout}>
            <FormChekout />
          </FormProvider>
        </div>
        <div className="flex flex-col gap-8 rounded-md bg-base-card p-10">
          <header className="flex gap-2">
            <DollarSign className="text-purple" size={22} />
            <div>
              <h4 className="text-base font-normal leading-tight text-base-subtitle">
                Pagamento
              </h4>
              <p className="text-sm font-normal leading-tight text-base-text">
                Informe a forma de pagamento, atualmente so é realizado por
                cartão de crédito
              </p>
            </div>
          </header>
          {errors.methodPayment && (
            <p className="flex text-xs font-bold leading-tight text-error-color">
              Escolha um método de pagamento
            </p>
          )}
          <FormProvider {...formCheckout}>
            <PaymentMethods />
          </FormProvider>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="mb-4 font-ballo2 text-lg font-bold leading-tight text-base-subtitle">
          Cafés selecionados
        </h3>
        <div className="rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
          {cartCoffees.length !== 0 ? (
            <>
              <CoffeeInCart />
              <CheckoutValues />
              <form onSubmit={handleSubmit(teste)}>
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md bg-yellow p-3 text-sm font-bold uppercase leading-normal text-white transition-colors hover:bg-yellow-dark"
                >
                  Confirmar pedido
                </button>
              </form>
            </>
          ) : (
            <h3 className="font-ballo2 text-xl font-bold leading-tight text-base-subtitle">
              Seu carrinho está vazio,{' '}
              <a
                href="/"
                className="text-purple transition-opacity hover:opacity-70"
              >
                volte
              </a>{' '}
              e escolha seus cafés
            </h3>
          )}
        </div>
      </div>

      <RootDialog open={open} onOpenChange={() => open && setOpen(false)}>
        <ModalSuccess />
      </RootDialog>
    </div>
  )
}
