import {GetServerSideProps, NextPage} from 'next'
import {getSession, signIn} from 'next-auth/client'
import {FormEvent, useState, ChangeEvent} from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'

const SignUpPage: NextPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  })
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify(form),
    })
    signIn('credentials', {...form})
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
    <Layout title="Login">
      <Form onSubmit={handleSubmit}>
        <img src="/logo.png" alt="Dragon's Logo" />
        <h1>Cadastre seu usuário</h1>
        <label>
          Nome
          <input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          E-mail
          <input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Usuário
          <input
            name="username"
            type="text"
            placeholder="Digite o usuário"
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Senha
          <input
            name="password"
            type="password"
            placeholder="Digite a senha"
            onChange={handleInputChange}
            required
          />
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Layout>
  )
}

export default SignUpPage

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
