/* eslint-disable @next/next/no-html-link-for-pages */
import { gql, useQuery } from "@apollo/client";
import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useGetProductsQuery, useMeQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/pagePublic";
import { withApollo } from "../../lib/withApollo";

// Movido para graphql queries
// const PRODUCTS_QUERY = gql`
//   query GetProducts {
//     products {
//       id
//       title
//     }
//   }
// `;

function Home({ data }) {
  const { user } = useUser();
  const { data: me } = useMeQuery();
  // const {data, loading, error} = useQuery(PRODUCTS_QUERY);

  return (
    <div className="text-violet-500">
      <pre>
        ok: {JSON.stringify(me, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(data?.products, null, 2)}
      </pre>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  // getServerSideProps: async ({ req, res }) => {
  getServerSideProps: async (ctx) => {
    // apolloClient.query(PRODUCTS_QUERY) Poderia ser assim, mas vamos fazer na pasta lib withApollo
    // console.log(getAccessToken(req, res))

    return getServerPageGetProducts({}, ctx)

    // poderia apenas retornar await getServerPageGetProducts(null, ctx)
    // const data = await getServerPageGetProducts({}, ctx)
    // console.log(data)

    // return {
    //   props: {
    //     // apolloState
    //     data
    //   }
    // }
  }
});
// ===
// export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
//   const session = getSession(req, res);

//   if(!session) {
//     return {
//       redirect: {
//         destination: '/api/auth/login',
//         permanent: false
//       }
//     }
//   }

//   // Logado
//   return {
//     props: {}
//   }
// }

// export default withApollo(Home);
export default withApollo(
  ssrGetProducts.withPage()(Home)
);

// Varias paginas utilizava compose no react