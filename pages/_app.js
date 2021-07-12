//Styled components imports
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utils/styled-components/globalStyles"
import { theme } from "../utils/styled-components/theme"

//@artsy/fresnel import
import { MediaContextProvider } from "../utils/media"

function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </MediaContextProvider>
  )
}

export default MyApp
