import {promises} from 'fs'
import {NextApiRequest, NextApiResponse} from 'next'
import NextAuth, {InitOptions} from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {},
      async authorize({username, password}) {
        const data = await promises.readFile('./fakeDB.json')
        const users = JSON.parse(data.toString())
        const fakeUserFind = users.find(
          (user: {username: string; password: string}) =>
            user.username === username && user.password === password,
        )
        if (fakeUserFind) {
          return fakeUserFind
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
