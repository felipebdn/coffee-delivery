import * as RadioGroup from '@radix-ui/react-radio-group'
import { CreditCard, Landmark } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'

export function PaymentMethods() {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name="methodPayment"
      rules={{ required: true }}
      render={({ field }) => {
        return (
          <RadioGroup.Root
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
            className="grid grid-cols-3 gap-3 max-[640px]:flex max-[640px]:flex-col"
          >
            <RadioGroup.Item
              value="credit"
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 data-[state=checked]:border-purple"
            >
              <CreditCard size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                Cartão de crédito
              </span>
            </RadioGroup.Item>
            <RadioGroup.Item
              disabled={true}
              value="debit"
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 disabled:cursor-not-allowed disabled:bg-base-hover data-[state=checked]:border-purple"
            >
              <Landmark size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                cartão de débito
              </span>
            </RadioGroup.Item>
            <RadioGroup.Item
              disabled={true}
              value="money"
              className="flex items-center justify-center gap-3 rounded-md border border-transparent bg-purple-light p-4 disabled:cursor-not-allowed disabled:bg-base-hover data-[state=checked]:border-purple"
            >
              <CreditCard size={16} className="text-purple" />
              <span className="text-xs font-normal uppercase leading-normal text-base-text">
                dinheiro
              </span>
            </RadioGroup.Item>
          </RadioGroup.Root>
        )
      }}
    />
  )
}
