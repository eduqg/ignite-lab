import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from "@apollo/client";
import { NextPage } from "next";

// Nem todas as páginas vou precisar fazer requisições graphql
// HOC - é o high order component, export const withApollo = () => {}
// High order funcion é uma uma função que recebe uma outra função
// array.map(() => {}) é high order funcion
// Vamos passar um componente como parametro, high order component
export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient()}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

function getApolloClient() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch,
    // fetch: window.fetch ou apenas fetch
  })

  // Posso fazer tambem cache no localstorage, redis ou em memória
  const cache = new InMemoryCache();

  return new ApolloClient({
    link: from([httpLink]),
    cache
  })

}
