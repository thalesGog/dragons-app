import React, {ReactNode} from 'react'
import Head from 'next/head'
import Container from './Container'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'Dragons App'}: Props): JSX.Element => (
  <Container>
    <Head>
      <title>{title ? `Dragons App - ${title}` : title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </Container>
)

export default Layout
