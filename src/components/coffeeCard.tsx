import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import coffee from '../assets/images/coffee.svg'

export function CoffeeCart() {
  return (
    <article className="relative mt-5 flex w-full flex-col justify-between rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-base-card px-6 pb-5">
      <div className="-mt-5 flex w-full flex-col items-center">
        <Image src={coffee} alt="" />
        <div className="flex w-full flex-wrap justify-center gap-1 pt-3">
          <span className="rounded-full bg-yellow-light px-2 py-1 text-[10px] font-bold uppercase leading-tight text-yellow-dark">
            tradicional
          </span>
          <span className="rounded-full bg-yellow-light px-2 py-1 text-[10px] font-bold uppercase leading-tight text-yellow-dark">
            tradicional
          </span>
          <span className="rounded-full bg-yellow-light px-2 py-1 text-[10px] font-bold uppercase leading-tight text-yellow-dark">
            tradicional
          </span>
        </div>
        <h4 className="mt-4 font-ballo2 text-xl font-bold leading-tight text-base-subtitle">
          Expresso Tradicional
        </h4>
        <p className="mt-2 text-center text-sm font-normal leading-tight text-base-label">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm font-normal leading-tight text-base-text">
          R${' '}
          <span className="font-ballo2 text-2xl leading-tight text-base-text">
            9,90
          </span>
        </div>
        <aside className="flex gap-2">
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
          <button className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-dark text-base-card">
            <ShoppingCart size={22} />
          </button>
        </aside>
      </div>
    </article>
  )
}
