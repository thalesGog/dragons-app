import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Button from '../components/Button'

test('Render Button component', async () => {
  const {container} = render(<Button />)
  expect(container).toMatchSnapshot()
})
