import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsContext, NextPage } from "next";

export type ApolloClientContext = GetServerSidePropsContext

// Nem todas as páginas vou precisar fazer requisições graphql
// HOC - é o high order component, export const withApollo = () => {}
// High order funcion é uma uma função que recebe uma outra função
// array.map(() => {}) é high order funcion
// Vamos passar um componente como parametro, high order component
export const withApollo = (Component: NextPage) => {
  // Essas props são recebidas do getServerSideProps do index
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

// initialState === ssrCache
export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
  // Poderia colocar no ctx as autorizações, mas estamos utilizando auth0
  // Auth0: apenas pelo server side posso acessar token, não pelo client side, nem pelo f12 consigo
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/api',
    // uri: 'http://localhost:3332/graphql',
    fetch,
    // fetch: window.fetch ou apenas fetch
  })

  // Posso fazer tambem cache no localstorage, redis ou em memória
  // Caso ssrCache não exista, passar objeto vazio
  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache
  })

}
