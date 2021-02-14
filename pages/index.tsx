import {GetServerSideProps, NextPage} from 'next'
import {getSession, signOut, useSession} from 'next-auth/client'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  const [session] = useSession()

  return (
    <Layout title="Página inicial">
      <h1>Dragons App</h1>
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
