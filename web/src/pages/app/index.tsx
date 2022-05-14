import {   getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({req, res}) => {
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