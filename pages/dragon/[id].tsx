import {GetServerSideProps} from 'next'
import {getSession} from 'next-auth/client'
import {format, parseISO} from 'date-fns'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import {Dragon} from '../../interfaces'
import {dragonDetails} from '../../services/dragonDetails'

type Props = {
  dragon: Dragon
}

const DragonDetailsPage = ({dragon}: Props): JSX.Element => {
  return (
    <Layout title="Detalhes do dragão">
      <h1>
        #{dragon.id} - {dragon.name}
      </h1>
      <Card>
        <h3>Tipo: {dragon.type}</h3>
        <p>
          Data de criação: {format(parseISO(dragon.createdAt), 'MM/dd/yyyy')}
        </p>
      </Card>
    </Layout>
  )
}

export default DragonDetailsPage

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

  const {params} = ctx
  const id = Number(params.id)
  const dragon = await dragonDetails(id)

  return {
    props: {
      dragon,
    },
  }
}
