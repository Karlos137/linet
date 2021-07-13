import React from "react"

//React components imports
import Card from "./Card"

//Styled components imports
import Wrapper from "./Wrapper"

const Cards = () => {
  return (
    <Wrapper>
      <Card
        heading="Better Positioning for Mom"
        icon="mom"
        texts={[
          "Easy and quick change of upright birth positions",
          "Unlimited number of positions",
          "Empowers mom to adjust bed for her comfort",
        ]}
      />
      <Card
        heading="Safety for Mom and Caregiver"
        icon="shield"
        texts={[
          "Protection with multifunctional siderails",
          "Battery power backup",
          "Foot section allows for safer positioning",
        ]}
      />
      <Card
        heading="Better Ergonomics for Caregiver"
        icon="heart"
        texts={[
          "No need to lift and remove heavy foot section",
          "One-handed rapid configuration change",
          "Easier access to Mom",
        ]}
      />
      <Card
        heading="Unique Design"
        icon="design"
        texts={[
          "Column design and flat deck improves hygiene",
          "Easy mattress removal with seamless upholstery reduces fluid ingress",
          "Award winning design developed for nurses by nurse",
        ]}
      />
    </Wrapper>
  )
}

export default Cards
