import axios from 'axios'
import getConfig from 'next/config'
import {Dragon} from '../interfaces'

export const dragonEdit = async (dragon: Dragon, id: number): Promise<JSON> => {
  const {DRAGONS_API_URL} = getConfig().publicRuntimeConfig

  const {data} = await axios.put(`${DRAGONS_API_URL}/${id}`, dragon)

  return data
}
