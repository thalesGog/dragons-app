import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../components/Button'

test('Render Button component', async () => {
  render(<Button />)
})
