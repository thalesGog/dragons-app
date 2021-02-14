import {AppProps} from 'next/app'
import {Provider} from 'next-auth/client'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fontFamily};
    color: ${({theme}) => theme.colors.primary};
  }
`

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <Provider session={pageProps?.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
