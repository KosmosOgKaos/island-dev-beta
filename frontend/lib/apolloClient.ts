import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createLoginStore } from './loginStore';

const httpLink = createHttpLink({
  // TODO: put in env/and/or next.js config or something
  uri: 'http://localhost:4000/api/graphql',
})

const authLink = setContext((_, { headers }) => {
  const { getUser } = createLoginStore()
  const token = getUser().token
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // Maybe set to true? but we'd need a way to get the token from the client
  ssrMode: false,
})

