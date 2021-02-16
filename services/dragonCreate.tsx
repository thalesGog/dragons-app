import axios from 'axios'
import getConfig from 'next/config'
import {Dragon} from '../interfaces'

export const dragonCreate = async (dragon: Dragon): Promise<JSON> => {
  const {DRAGONS_API_URL} = getConfig().publicRuntimeConfig

  const {data} = await axios.post(`${DRAGONS_API_URL}`, dragon)

  return data
}
