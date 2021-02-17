import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../components/Form'

test('Render Form component', async () => {
  render(<Form />)
})
