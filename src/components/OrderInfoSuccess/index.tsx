import { MapPin, Timer, DollarSign } from 'lucide-react'
import './styles.css'
import { coffeesFormContext } from '@/context/coffeeFormContext'
import { useContext } from 'react'
export function OrderInfoSuccess() {
  const { dataForm } = useContext(coffeesFormContext)
  console.log(dataForm)

  const { methodPayment } = dataForm
  const getMethodPayment = () => {
    switch (methodPayment) {
      case 'credit':
        return {
          method: 'Cartão de Crédito',
        }
      case 'debit':
        return {
          method: 'Cartão de Débito',
        }
      case 'money':
        return {
          method: 'Dinheiro',
        }
      default:
        return {
          method: null,
        }
    }
  }
  const { method } = getMethodPayment()
  return (
    <div className="gradientSuccess flex flex-col gap-8 p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-fit rounded-full bg-purple p-2 text-white">
          <MapPin size={16} />
        </div>
        <div className="text-base font-medium leading-tight text-base-text">
          <p>
            Entrega em{' '}
            <strong>
              {dataForm.rua}, {dataForm.numero}
            </strong>
          </p>
          <p>
            {dataForm.bairro} - {dataForm.cidade}, {dataForm.uf}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-fit rounded-full bg-yellow p-2 text-white">
          <Timer size={16} />
        </div>
        <div className="text-base font-medium leading-tight text-base-text">
          <p>Previsão de entrega</p>
          <p>
            <strong>20 min - 30 min</strong>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-fit rounded-full bg-yellow-dark p-2 text-white">
          <DollarSign size={16} />
        </div>
        <div className="text-base font-medium leading-tight text-base-text">
          <p>Pagamento na entrega</p>
          <p>
            <strong>{method}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
