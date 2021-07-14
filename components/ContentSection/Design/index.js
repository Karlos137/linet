import React from "react"

//Styled components imports
import Wrapper from "./Wrapper"
import Text from "./Text"
import Container from "./Container"
import ImageWrapper from "./ImageWrapper"
import Image from "./Image"

const Design = () => {
  return (
    <Wrapper>
      <Container first>
        <Text first></Text>
        <ImageWrapper first>
          <Image
            src="/design-img-1.png"
            alt="Birthing bed"
            width="854"
            height="669"
            quality="100"
          />
        </ImageWrapper>
      </Container>
      <Container second>
        <Text second>Award winning design developed for nurses by nurses</Text>
        <ImageWrapper second>
          <Image
            src="/design-img-2.png"
            alt="Birthing bed"
            width="375"
            height="283"
            quality="100"
          />
        </ImageWrapper>
      </Container>
      <Container third>
        <Text third>
          Easy mattress removal with seamless upholstery reduces fluid ingress
        </Text>
        <ImageWrapper third>
          <Image
            src="/design-img-3.png"
            alt="Birthing bed"
            width="588"
            height="510"
            quality="100"
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  )
}

export default Design
