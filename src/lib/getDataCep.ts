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
    const res = await axios.get(
      `https://viacep.com.br/ws/${cep || '00000000'}/json/`,
    )
    console.log(res)

    const data: dataViaCepTypes | undefined = res.data

    return data
  } catch (error) {
    console.log(error)
  }
}
