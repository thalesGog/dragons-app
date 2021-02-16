import {formatISO} from 'date-fns'
import {GetServerSideProps, NextPage} from 'next'
import {getSession} from 'next-auth/client'
import {useRouter} from 'next/dist/client/router'
import {FormEvent, useState, ChangeEvent} from 'react'
import Button from '../../components/Button'
import Form from '../../components/Form'
import Layout from '../../components/Layout'
import {dragonCreate} from '../../services/dragonCreate'

const DragonCreatePage: NextPage = () => {
  const {push} = useRouter()
  const [form, setForm] = useState({
    name: '',
    type: '',
  })
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const date = new Date()
    await dragonCreate({
      ...form,
      createdAt: formatISO(date),
    })
    push('/')
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
        <h1>Criar dragão</h1>
        <label>
          Nome
          <input
            name="name"
            type="text"
            placeholder="Digite o nome do dragão"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Tipo
          <input
            name="type"
            type="text"
            placeholder="Digite o tipo do dragão"
            onChange={handleInputChange}
            required
          />
        </label>
        <Button type="submit">Criar</Button>
      </Form>
    </Layout>
  )
}

export default DragonCreatePage

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
