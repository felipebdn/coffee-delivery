'use client'
import './styles.css'
import { useForm } from 'react-hook-form'
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
import { useState } from 'react'

import coffeeImage from '../../assets/images/coffee.svg'

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
  const [inputFocus, setInputFocus] = useState(false)
  const { register } = useForm<CheckoutTypes>({
    resolver: zodResolver(checkoutSchema),
  })
  // function teste(data: CheckoutTypes) {
  //   console.log(data)
  // }
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
          <div className="grid grid-cols-7 gap-4">
            <input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              className="inputCheckout inputTextPlaceholder col-span-3"
            />
            <input
              type="text"
              placeholder="Rua"
              {...register('rua')}
              className="inputCheckout inputTextPlaceholder col-span-7"
            />
            <input
              type="text"
              placeholder="Número"
              {...register('numero')}
              className="inputCheckout inputTextPlaceholder col-span-3"
            />
            <label
              aria-pressed={inputFocus}
              className="inputCheckout col-span-4 flex items-center aria-pressed:border-yellow-dark"
            >
              <input
                type="text"
                placeholder="Complemento"
                {...register('rua')}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                className="inputTextPlaceholder flex-1 bg-transparent outline-none"
              />
              <span className="text-xs font-normal italic leading-tight text-base-label">
                Opcional
              </span>
            </label>
            <input
              className="inputCheckout inputTextPlaceholder col-span-3"
              type="text"
              placeholder="Bairro"
              {...register('bairro')}
            />
            <input
              className="inputCheckout inputTextPlaceholder col-span-3"
              type="text"
              placeholder="Cidade"
              {...register('cidade')}
            />
            <input
              className="inputCheckout inputTextPlaceholder col-span-1"
              type="text"
              placeholder="UF"
              {...register('uf')}
            />
          </div>
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
          <div>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </div>
          <button>Confirmar pedido</button>
        </div>
      </div>
    </div>
  )
}
