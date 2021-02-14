import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string
    backgroundColor: string
    colors: {
      primary: string
      secondary: string
    }
  }
}
