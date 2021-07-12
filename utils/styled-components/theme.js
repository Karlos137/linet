import breakpoints from "../breakpoints"

export const theme = {
  colors: {
    main: "#DA251C",
    secondary: "#848283",
    text: "#000000",
    border: "#707070",
  },
  mediaQueries: {
    sm: `min-width: ${breakpoints.sm}px`,
    md: `min-width: ${breakpoints.md}px`,
    lg: `min-width: ${breakpoints.lg}px`,
    xl: `min-width: ${breakpoints.xl}px`,
    xxl: `min-width: ${breakpoints.xxl}px`,
  },
}
