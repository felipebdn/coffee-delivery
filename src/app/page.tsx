import { Hero } from '@/components/hero'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import coffee from '../assets/images/coffee.svg'

export default function Home() {
  return (
    <>
      <Hero />
      <aside>
        <h3 className="mb-8 font-ballo2 text-3xl font-extrabold leading-tight text-base-subtitle">
          Nossos cafés
        </h3>
        <main className="grid grid-cols-4 gap-8">
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
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div>
              <div>
                R$ <span>9,90</span>
              </div>
              <aside>
                <div>1</div>
                <button>
                  <ShoppingCart />
                </button>
              </aside>
            </div>
          </article>
        </main>
      </aside>
    </>
  )
}
