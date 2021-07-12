import React from "react"

//Styled components imports
import Wrapper from "./Wrapper"
import Image from "./Image"
//Text container imports
import TextContainer from "./TextContainer"
import Heading from "./Heading"
import Text from "./Text"
import ButtonsContainer from "./ButtonsContainer"
import Button from "./Button"
//Image container imports
import ImageContainer from "./ImageContainer"
import Tabs from "./Tabs"
import Tab from "./Tab"

const HeroSection = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Heading>AVE 2 Birthing Bed</Heading>
        <Text>
          A birthing bed focused on better upright birth positions for mom and
          safer ergonomics for the caregiver.
        </Text>
        <ButtonsContainer>
          <Button
            href="mailto:linet@example.com?subject=LINET%20example"
            title="CONTACT ME"
          >
            CONTACT ME
          </Button>
          <Button href="#" title="LEARNING RESOURCES">
            LEARNING RESOURCES
          </Button>
        </ButtonsContainer>
        <div>
          <Image
            src="/reddot.png"
            alt="Reddot design award winner 2017"
            width="117"
            height="58"
            quality={100}
          />
        </div>
      </TextContainer>
      <ImageContainer>
        <Image src="/hero.png" alt="Birthing bed" width="800" height="720" />
        <Tabs>
          <Tab active>PHOTO</Tab>
          <Tab model>INTERACTIVE 3D MODEL</Tab>
        </Tabs>
      </ImageContainer>
    </Wrapper>
  )
}

export default HeroSection
