import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../theme'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Form from '../components/Form'

test('Render Form component', async () => {
  const {container} = render(
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()
})
