'use client'
import { useContext } from 'react'
import { coffeeContext } from '@/context/coffeesContext'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatCoffeeValue } from '@/lib/formatValueMoney'

export function CoffeeInCart() {
  const {
    cartCoffees,
    handleChangeAmountCoffeeInCart,
    handleRemoveCoffeeInCart,
  } = useContext(coffeeContext)
  return (
    <div className="flex flex-col gap-6">
      {cartCoffees.map((coffee) => {
        return (
          <div
            key={coffee.id}
            className="mb-6 flex justify-between gap-4 border-b border-base-button pb-6"
          >
            <div className="flex gap-5">
              <Image src={coffee.coverUrl} alt="" width={64} height={64} />
              <div className="flex flex-col items-start justify-between">
                <h4 className="text-base font-normal leading-tight text-base-subtitle">
                  {coffee.coffeeName}
                </h4>
                <div className="flex gap-2">
                  <div className="flex h-9 items-center gap-2 rounded-md bg-base-button px-2 text-purple-dark">
                    <button
                      onClick={() =>
                        handleChangeAmountCoffeeInCart(coffee.id, 'substract')
                      }
                    >
                      <Minus size={14} strokeWidth={3} />
                    </button>
                    <span className="text-center text-base font-normal leading-tight text-base-title">
                      {coffee.amountCoffees}
                    </span>
                    <button
                      onClick={() =>
                        handleChangeAmountCoffeeInCart(coffee.id, 'add')
                      }
                    >
                      <Plus size={14} strokeWidth={3} />
                    </button>
                  </div>
                  <button className="flex items-center gap-1 rounded-md bg-base-button px-2">
                    <Trash2 size={16} className="text-purple" />
                    <button
                      onClick={() => handleRemoveCoffeeInCart(coffee.id)}
                      className="text-xs font-normal uppercase leading-normal text-base-text"
                    >
                      Remover
                    </button>
                  </button>
                </div>
              </div>
            </div>
            <span className="text-base font-bold leading-tight text-base-text">
              R$ {formatCoffeeValue(coffee.price * coffee.amountCoffees)}
            </span>
          </div>
        )
      })}
    </div>
  )
}
