import axios from 'axios'
import getConfig from 'next/config'

export const dragonList = async (): Promise<JSON> => {
  const {DRAGONS_API_URL} = getConfig().publicRuntimeConfig

  const {data} = await axios.get(`${DRAGONS_API_URL}`)

  return data
}
