import {GetServerSideProps} from 'next'
import {getSession} from 'next-auth/client'
import {useRouter} from 'next/dist/client/router'
import {FormEvent, useState, ChangeEvent} from 'react'
import Button from '../../../components/Button'
import Form from '../../../components/Form'
import Layout from '../../../components/Layout'
import {Dragon} from '../../../interfaces'
import {dragonDetails} from '../../../services/dragonDetails'
import {dragonEdit} from '../../../services/dragonEdit'

type Props = {
  dragon: Dragon
}

const DragonEditPage = ({dragon}: Props): JSX.Element => {
  const {push} = useRouter()
  const {id, name, type} = dragon
  const [form, setForm] = useState({
    name,
    type,
  })
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    await dragonEdit(form, id)
    push(`/dragon/details/${id}`)
  }

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target
    setForm(previousState => {
      return {
        ...previousState,
        [name]: value,
      }
    })
  }
  return (
    <Layout title="Criação de dragão">
      <Form onSubmit={handleSubmit}>
        <h1>Editar dragão</h1>
        <label>
          Nome
          <input
            name="name"
            type="text"
            placeholder="Edite o nome do dragão"
            onChange={handleInputChange}
            value={form.name}
            required
          />
        </label>
        <label>
          Tipo
          <input
            name="type"
            type="text"
            placeholder="Edite o tipo do dragão"
            onChange={handleInputChange}
            value={form.type}
            required
          />
        </label>
        <Button type="submit">Editar</Button>
      </Form>
    </Layout>
  )
}

export default DragonEditPage

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
