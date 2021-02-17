import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../theme'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import Item from '../components/Item'

test('Render Item component', async () => {
  const {container} = render(
    <ThemeProvider theme={theme}>
      <Item />
    </ThemeProvider>,
  )
  expect(container).toMatchSnapshot()
})
