import {NextApiRequest, NextApiResponse} from 'next'
import NextAuth, {InitOptions} from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {},
      async authorize(credentials) {
        const user = {
          id: 1,
          name: 'Lil Wayne',
          email: 'weezy@example.com',
        }
        if (credentials) {
          return user
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
