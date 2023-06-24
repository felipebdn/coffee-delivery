import { MapPin, Timer, DollarSign } from 'lucide-react'
import './styles.css'
export function OrderInfoSuccess() {
  return (
    <div className="gradientSuccess flex flex-col gap-8 p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-fit rounded-full bg-purple p-2 text-white">
          <MapPin size={16} />
        </div>
        <div className="text-base font-medium leading-tight text-base-text">
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </p>
          <p>Farrapos - Porto Alegre, RS </p>
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
            <strong>Cartão de Crédito</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
