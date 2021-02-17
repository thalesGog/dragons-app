import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../theme'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import client, {Session} from 'next-auth/client'
import Layout from '../components/Layout'
jest.mock('next-auth/client')

test('Render Layout component', async () => {
  const mockSession: Session = {
    expires: '1',
    user: {email: 'a', name: 'Delta', image: 'c'},
  }

  ;(client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false])
  const {container} = render(
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()
})
