import { coffeeContext } from '@/context/coffeesContext'
import { formatCoffeeValue } from '@/lib/formatValueMoney'
import { useContext } from 'react'

export function CheckoutValues() {
  const { cartCoffees } = useContext(coffeeContext)
  // const { delivery, setDelivery } = useState(3.5)
  const delivery = 3.5
  const totalValueOfCoffees = cartCoffees.reduce((value, coffee) => {
    return coffee.price * coffee.amountCoffees + value
  }, 0)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm font-normal leading-tight text-base-text">
        <p>Total de itens</p>
        <span className="text-base">
          R$ {formatCoffeeValue(totalValueOfCoffees)}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm font-normal leading-tight text-base-text">
        <p>Entrega</p>
        <span className="text-base">R$ {formatCoffeeValue(delivery)}</span>
      </div>
      <div className="flex justify-between text-xl font-bold leading-tight text-base-subtitle">
        <p>Total</p>
        <span>R$ {formatCoffeeValue(delivery + totalValueOfCoffees)}</span>
      </div>
    </div>
  )
}
