'use client'
import './styles.css'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react'
import Image from 'next/image'

import coffeeImage from '../../assets/images/coffee.svg'
import { FormChekout } from './FormCheckout'

const checkoutSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.number(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
})

type CheckoutTypes = zod.infer<typeof checkoutSchema>

export default function Checkout() {
  const formCheckout = useForm<CheckoutTypes>({
    resolver: zodResolver(checkoutSchema),
  })
  function teste(data: CheckoutTypes) {
    console.log(data)
  }
  const { handleSubmit } = formCheckout
  return (
    <div className="grid grid-cols-5 gap-8">
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <div className="grid grid-cols-3 gap-3">
            <div
              aria-checked={true}
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 aria-checked:border-purple"
            >
              <CreditCard size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                Cartão de crédito
              </span>
            </div>
            <div
              aria-checked={false}
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 aria-checked:border-purple"
            >
              <Landmark size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                cartão de débito
              </span>
            </div>
            <div
              aria-checked={false}
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 aria-checked:border-purple"
            >
              <CreditCard size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                dinheiro
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="mb-4 font-ballo2 text-lg font-bold leading-tight text-base-subtitle">
          Cafés selecionados
        </h3>
        <div className="rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
          <div className="flex flex-col gap-6">
            <div className="mb-6 flex justify-between gap-4 border-b border-base-button pb-6">
              <div className="flex gap-5">
                <Image src={coffeeImage} alt="" width={64} height={64} />
                <div className="flex flex-col items-start justify-between">
                  <h4 className="text-base font-normal leading-tight text-base-subtitle">
                    Expresso Tradicional
                  </h4>
                  <div className="flex gap-2">
                    <div className="flex h-9 items-center gap-2 rounded-md bg-base-button px-2 text-purple-dark">
                      <button>
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="text-center text-base font-normal leading-tight text-base-title">
                        1
                      </span>
                      <button>
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                    <button className="flex items-center gap-1 rounded-md bg-base-button">
                      <Trash2 size={16} className="text-purple" />
                      <span className="text-xs font-normal uppercase leading-normal text-base-text">
                        Remover
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-base font-bold leading-tight text-base-text">
                R$ 9,90
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm font-normal leading-tight text-base-text">
              <p>Total de itens</p>
              <span className="text-base">R$ 29,70</span>
            </div>
            <div className="flex items-center justify-between text-sm font-normal leading-tight text-base-text">
              <p>Entrega</p>
              <span className="text-base">R$ 3,50</span>
            </div>
            <div className="flex justify-between text-xl font-bold leading-tight text-base-subtitle">
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </div>
          <form onSubmit={handleSubmit(teste)}>
            <button className="mt-6 flex w-full items-center justify-center rounded-md bg-yellow p-3 text-sm font-bold uppercase leading-normal text-white">
              Confirmar pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
