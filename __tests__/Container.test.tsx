import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Container from '../components/Container'

test('Render Container component', async () => {
  const {container} = render(<Container />)
  expect(container).toMatchSnapshot()
})
