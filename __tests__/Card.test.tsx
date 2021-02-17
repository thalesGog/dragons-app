import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from '../components/Card'

test('Render Card component', async () => {
  render(<Card />)
})
