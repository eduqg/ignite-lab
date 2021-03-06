import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next";


export default function Home() {
  // const { user } = useUser();

  // return (
  //   <div>
  //     <pre>
  //       {JSON.stringify(user, null, 2)}
  //     </pre>
  //     <a href="/api/auth/login">Login</a>
  //   </div>
  // )



  return <h1>Home</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);


  const token = getAccessToken(req, res);
  console.log({ token })

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }
}