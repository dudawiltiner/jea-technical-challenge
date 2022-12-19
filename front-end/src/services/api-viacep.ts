import axios from 'axios'

const API_VIACEP = 'https://cdn.apicep.com/file/apicep/'

export const fetchFindCep: (value: string) => Promise<Response> = async (
  cep
) => {
  const response = await axios.get(
    `${API_VIACEP}${`${cep.slice(0, 5)}-${cep.slice(5, 8)}`}.json`
  )

  const data = response.data

  return data
}

interface Response {
  code: string
  state: string
  city: string
  district: string
  address: string
  status: number
  ok: boolean
  statusText: string
}
