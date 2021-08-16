import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { client } from '../lib/apolloClient'
import { ApolloProvider } from '@apollo/client'


const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
