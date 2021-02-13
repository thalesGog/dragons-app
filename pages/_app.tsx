import App from 'next/app'
import {AppProps, AppContext} from 'next/app'
import {Provider} from 'next-auth/client'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Provider session={pageProps?.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return {...appProps}
}

export default MyApp
