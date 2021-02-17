import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../components/Navbar'

test('Render Navbar component', async () => {
  render(<Navbar />)
})
