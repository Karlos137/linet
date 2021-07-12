import { createMedia } from "@artsy/fresnel"

import breakpoints from "./breakpoints"

const QueryBreakpoints = createMedia({
  breakpoints: breakpoints,
})

// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints
