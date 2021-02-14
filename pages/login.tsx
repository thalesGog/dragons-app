import {GetServerSideProps, NextPage} from 'next'
import Link from 'next/link'
import {getSession, signIn} from 'next-auth/client'
import {FormEvent, useState, ChangeEvent} from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Form from '../components/Form'

const LoginPage: NextPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
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
        <label>
          Usuário
          <input
            name="username"
            type="text"
            placeholder="Digite seu usuário"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Senha
          <input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={handleInputChange}
          />
        </label>
        <Button type="submit">Entrar</Button>
        Não tem uma conta?
        <Link href="/signup"> Cadastre-se aqui.</Link>
      </Form>
    </Layout>
  )
}

export default LoginPage

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
