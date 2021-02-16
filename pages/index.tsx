import {GetServerSideProps} from 'next'
import {getSession} from 'next-auth/client'
import {useRouter} from 'next/dist/client/router'
import Link from 'next/link'
import Item from '../components/Item'
import Layout from '../components/Layout'
import {Dragon} from '../interfaces'
import {dragonDelete} from '../services/dragonDelete'
import {dragonList} from '../services/dragonList'

type Props = {
  dragons: Dragon[]
}

const IndexPage = ({dragons}: Props): JSX.Element => {
  const {push} = useRouter()
  const handleDeleteDragon = async (id: number): Promise<void> => {
    dragonDelete(id)
    push('/')
  }
  return (
    <Layout title="Listagem de Dragões">
      <h1>Dragões</h1>
      {dragons
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(dragon => (
          <Item key={dragon.id}>
            {dragon.name}
            <hr />
            <Link href={`/dragon/details/${dragon.id}`}>Detalhes</Link>
            <Link href={`/dragon/edit/${dragon.id}`}>Editar</Link>
            <span onClick={() => handleDeleteDragon(dragon.id)}>Excluir</span>
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
