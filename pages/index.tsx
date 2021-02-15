import {GetServerSideProps} from 'next'
import {getSession} from 'next-auth/client'
import Link from 'next/link'
import Item from '../components/Item'
import Layout from '../components/Layout'
import {Dragon} from '../interfaces'
import {dragonList} from '../services/dragonList'

type Props = {
  dragons: Dragon[]
}

const IndexPage = ({dragons}: Props): JSX.Element => {
  return (
    <Layout title="Listagem de Dragões">
      <h1>Dragões</h1>
      {dragons
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(dragon => (
          <Item key={dragon.id}>
            #{dragon.id} - {dragon.name}
            <hr />
            <Link href="/">Editar</Link>
            <a href="/">Excluir</a>
          </Item>
        ))}
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

  const dragons = await dragonList()

  return {
    props: {
      dragons,
    },
  }
}
