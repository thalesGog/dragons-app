import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Card from '../components/Card'

test('Render Card component', async () => {
  const {container} = render(<Card />)
  expect(container).toMatchSnapshot()
})
