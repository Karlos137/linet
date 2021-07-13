import React from "react"

//React components imports
import Cards from "./Cards"

//Styled components imports
import Wrapper from "./Wrapper"
import Container from "./Container"
import Heading from "./Heading"

const CardsSection = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Caregivers and Moms Deserve the AVE 2 Birthing Bed</Heading>
        <Cards />
      </Container>
    </Wrapper>
  )
}

export default CardsSection
