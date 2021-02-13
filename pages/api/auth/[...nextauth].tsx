import {NextApiRequest, NextApiResponse} from 'next'
import NextAuth, {InitOptions} from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  providers: [
    Providers.Credentials({
      name: 'Login',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Type your username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Type your password',
        },
      },
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
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
