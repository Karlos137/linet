//Styled components imports
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utils/styled-components/globalStyles"
import { theme } from "../utils/styled-components/theme"

//@artsy/fresnel import
import { MediaContextProvider } from "../utils/media"

//Contexts imports
import { MenuContextProvider } from "../contexts/MenuContext"

function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <MenuContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </MenuContextProvider>
    </MediaContextProvider>
  )
}

export default MyApp
