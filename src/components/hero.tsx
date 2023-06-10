import { ShoppingCart, Timer, Package, Coffee } from 'lucide-react'
import Image from 'next/image'
import hero from '../assets/images/hero.svg'

export function Hero() {
  return (
    <aside className="grid w-full grid-cols-9 gap-8 py-20">
      <div className="col-span-5 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="self-stretch font-ballo2 text-5xl font-extrabold leading-tight text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h4 className="text-xl font-normal leading-tight text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h4>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-yellow-dark p-2 text-background">
                <ShoppingCart size={16} />
              </span>
              <span className="text-base font-normal leading-tight text-base-text">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-yellow p-2 text-background">
                <Timer size={16} />
              </span>
              <span className="text-base font-normal leading-tight text-base-text">
                Entrega rápida e rastreada
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-base-text p-2 text-background">
                <Package size={16} />
              </span>
              <span className="text-base font-normal leading-tight text-base-text">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple p-2 text-background">
                <Coffee size={16} />
              </span>
              <span className="text-base font-normal leading-tight text-base-text">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-1 items-center justify-center">
        <Image src={hero} alt="" className="w-4/5" />
      </div>
    </aside>
  )
}
