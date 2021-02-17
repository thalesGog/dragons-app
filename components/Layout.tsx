import React, {ReactNode} from 'react'
import Head from 'next/head'
import Container from './Container'
import Navbar from './Navbar'
import Link from 'next/link'
import {signOut, useSession} from 'next-auth/client'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'Dragons App'}: Props): JSX.Element => {
  const [session] = useSession()

  const logout = (): void => {
    signOut({callbackUrl: '/'})
  }
  return (
    <>
      <Head>
        <title>{title ? `Dragons App - ${title}` : title}</title>

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      {session && (
        <Navbar>
          <img src="/logo.png" alt="Dragon's Logo" />
          <ul>
            <Link href="/">
              <li>Início</li>
            </Link>
            <Link href="/dragon/create">
              <li>Criar</li>
            </Link>
          </ul>
          <span role="button" onClick={logout}>
            Sair
          </span>
        </Navbar>
      )}

      <Container>{children}</Container>
    </>
  )
}

export default Layout
