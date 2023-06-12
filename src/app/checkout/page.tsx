'use client'
import './styles.css'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreditCard, DollarSign, Landmark, MapPin, Trash } from 'lucide-react'
import Image from 'next/image'

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
  const { register } = useForm<CheckoutTypes>({
    resolver: zodResolver(checkoutSchema),
  })
  // function teste(data: CheckoutTypes) {
  //   console.log(data)
  // }
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <h3 className="mb-4 font-ballo2 text-lg font-bold leading-tight text-base-subtitle">
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
            <div className="inputCheckout col-span-4 flex">
              <input
                type="text"
                placeholder="Complemento"
                {...register('rua')}
                className="inputTextPlaceholder flex-1 bg-transparent outline-none"
              />
              <span>Opcional</span>
            </div>
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
        <div>
          <header className="flex gap-2">
            <DollarSign className="text-yellow-dark" size={22} />
            <div>
              <h4 className="text-base font-normal leading-tight text-base-subtitle">
                Pagamento
              </h4>
              <p className="text-sm font-normal leading-tight text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <div>
            <div>
              <CreditCard />
              <span>Cartão de crédito</span>
            </div>
            <div>
              <Landmark />
              <span>cartão de débito</span>
            </div>
            <div>
              <CreditCard />
              <span>dinheiro</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="mb-4 font-ballo2 text-lg font-bold leading-tight text-base-subtitle">
          Cafés selecionados
        </h3>
        <div>
          <div>
            <div>
              <Image src="" alt="" />
              <div>
                <h4>Expresso Tradicional</h4>
                <div>
                  <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button>
                    <Trash />
                    <span>Remover</span>
                  </button>
                </div>
              </div>
              <span>R$ 9,90</span>
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
