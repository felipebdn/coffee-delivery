import { coffeesFormContext } from '@/context/coffeeFormContext'
import { GetDataCep } from '@/lib/getDataCep'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function FormChekout() {
  const [inputFocus, setInputFocus] = useState(false)
  const { register, getValues, setValue } = useFormContext()
  const { location, handleLocation } = useContext(coffeesFormContext)

  const getCurrentLocation = useCallback(async () => {
    const dataCep = await GetDataCep(location)
    if (dataCep) {
      const { localidade, bairro, logradouro, uf, cep } = dataCep
      setValue('rua', logradouro)
      setValue('bairro', bairro)
      setValue('cidade', localidade)
      setValue('uf', uf)
      setValue('cep', cep ? cep.replace(/-/g, '') : cep)
    }
  }, [setValue, location])

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  async function getDataWichCep() {
    const cep = getValues('cep')
    if (cep && cep.length === 8) {
      const dataCep = await GetDataCep(cep)
      if (dataCep) {
        const { bairro, localidade, logradouro, uf } = dataCep
        setValue('rua', logradouro)
        setValue('bairro', bairro)
        setValue('cidade', localidade)
        setValue('uf', uf)
      }
    }
    if (cep !== location) handleLocation(cep)
  }
  return (
    <div className="grid grid-cols-7 gap-4">
      <input
        type="text"
        placeholder="CEP"
        {...register('cep')}
        onBlur={getDataWichCep}
        className="inputCheckout inputTextPlaceholder col-span-3"
      />
      <input
        type="text"
        placeholder="Rua"
        {...register('rua')}
        className="inputCheckout inputTextPlaceholder col-span-7"
      />
      <input
        type="number"
        placeholder="Número"
        {...register('numero', { valueAsNumber: true })}
        className="inputCheckout inputTextPlaceholder col-span-3"
      />
      <label
        aria-pressed={inputFocus}
        className="inputCheckout col-span-4 flex items-center aria-pressed:border-yellow-dark max-[640px]:col-span-7"
      >
        <input
          type="text"
          placeholder="Complemento"
          {...register('complemento')}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          className="inputTextPlaceholder flex-1 bg-transparent outline-none"
        />
        <span className="text-xs font-normal italic leading-tight text-base-label">
          Opcional
        </span>
      </label>
      <input
        className="inputCheckout inputTextPlaceholder col-span-3 max-[640px]:col-span-7"
        type="text"
        placeholder="Bairro"
        {...register('bairro')}
      />
      <input
        className="inputCheckout inputTextPlaceholder col-span-3 max-[640px]:col-span-5"
        type="text"
        placeholder="Cidade"
        {...register('cidade')}
      />
      <input
        className="inputCheckout inputTextPlaceholder col-span-1 max-[640px]:col-span-2"
        type="text"
        placeholder="UF"
        {...register('uf')}
      />
    </div>
  )
}
