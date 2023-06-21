import axios from 'axios'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

interface dataViaCepTypes {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export function FormChekout() {
  const [inputFocus, setInputFocus] = useState(false)
  const { register, getValues, setValue } = useFormContext()

  async function testeApi() {
    const cep = getValues('cep')
    if (cep.length === 8) {
      const { data }: { data: dataViaCepTypes } = await axios.get(
        `http://viacep.com.br/ws/${cep}/json/`,
      )
      console.log(data)
    }
  }
  return (
    <div className="grid grid-cols-7 gap-4">
      <input
        type="text"
        placeholder="CEP"
        {...register('cep')}
        onBlur={testeApi}
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
      <label
        aria-pressed={inputFocus}
        className="inputCheckout col-span-4 flex items-center aria-pressed:border-yellow-dark"
      >
        <input
          type="text"
          placeholder="Complemento"
          {...register('rua')}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          className="inputTextPlaceholder flex-1 bg-transparent outline-none"
        />
        <span className="text-xs font-normal italic leading-tight text-base-label">
          Opcional
        </span>
      </label>
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
  )
}
