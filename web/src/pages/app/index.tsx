/* eslint-disable @next/next/no-html-link-for-pages */
import { gql, useQuery } from "@apollo/client";
import {   getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { withApollo } from "../../lib/withApollo";

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      title
    }
  }
`;

function Home() {
  const { user } = useUser();
  const {data, loading, error} = useQuery(PRODUCTS_QUERY);

  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({req, res}) => {
    // apolloClient.query(PRODUCTS_QUERY) Poderia ser assim, mas vamos fazer na pasta lib withApollo
    console.log(getAccessToken(req, res))

    return {
      props: {}
    }
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

export default withApollo(Home);