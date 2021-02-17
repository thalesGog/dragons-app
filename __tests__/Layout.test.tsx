import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import client, {Session} from 'next-auth/client'
import Layout from '../components/Layout'
jest.mock('next-auth/client')

test('Render Layout component', async () => {
  const mockSession: Session = {
    expires: '1',
    user: {email: 'a', name: 'Delta', image: 'c'},
  }

  ;(client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false])
  render(<Layout />)
})
