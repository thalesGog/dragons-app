import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Item from '../components/Item'

test('Render Item component', async () => {
  render(<Item />)
})
