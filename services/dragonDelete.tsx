import axios from 'axios'
import getConfig from 'next/config'

export const dragonDelete = async (id: number): Promise<JSON> => {
  const {DRAGONS_API_URL} = getConfig().publicRuntimeConfig

  const {data} = await axios.delete(`${DRAGONS_API_URL}/${id}`)

  return data
}
