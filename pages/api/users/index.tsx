import type {NextApiRequest, NextApiResponse} from 'next'
import {promises} from 'fs'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const data = await promises.readFile('./fakeDB.json')
  const user = JSON.parse(data.toString())
  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    user.push({
      id: Math.floor(Math.random() * 100 + Date.now()),
      ...body,
    })
    await promises.writeFile('./fakeDB.json', JSON.stringify(user))
    return res.status(201).json({message: 'Usuário criado com sucesso!'})
  }
  res.status(200).json(data)
}
