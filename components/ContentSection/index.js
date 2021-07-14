import React from "react"

//React components imports
import Tabs from "./Tabs"
import DesignIcon from "../../components/Icons/DesignIcon"
import Design from "./Design"

//Styled components imports
import Wrapper from "./Wrapper"
import IconWrapper from "./IconWrapper"
import Heading from "./Heading"
import Text from "./Text"

const ContentSection = () => {
  return (
    <Wrapper>
      <Tabs />
      <IconWrapper>
        <DesignIcon />
      </IconWrapper>
      <Heading>Unique Design</Heading>
      <Text>
        AVE 2 Birthing bed is designed to fulfill requirements of women care and
        their caregivers. uisque lobortis accumsan leoefficiency
      </Text>
      <Design />
    </Wrapper>
  )
}

export default ContentSection
