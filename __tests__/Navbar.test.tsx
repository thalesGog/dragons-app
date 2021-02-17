import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../theme'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Navbar from '../components/Navbar'

test('Render Navbar component', async () => {
  const {container} = render(
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()
})
