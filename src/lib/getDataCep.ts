import axios from 'axios'

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

export async function GetDataCep(cep: string) {
  try {
    const { data }: { data: dataViaCepTypes } = await axios.get(
      `http://viacep.com.br/ws/${cep || '00000000'}/json/`,
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
