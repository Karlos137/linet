import React from "react"

//React components imports
import Tab from "./Tab"

//Styled components imports
import Wrapper from "./Wrapper"

const Tabs = () => {
  return (
    <Wrapper>
      <Tab text="Better Positioning for Mom" icon="mom" />
      <Tab text="Safety for Mom and Caregiver" icon="shield" />
      <Tab text="Better Ergonomics for Caregiver" icon="heart" />
      <Tab text="Unique design" icon="design" active />
    </Wrapper>
  )
}

export default Tabs
