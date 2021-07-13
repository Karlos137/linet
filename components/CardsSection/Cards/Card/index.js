import React from "react"

//React components imports
//Icons
import MomIcon from "./Icons/MomIcon"
import ShieldIcon from "./Icons/ShieldIcon"
import HeartIcon from "./Icons/HeartIcon"
import DesignIcon from "./Icons/DesignIcon"

//Styled components imports
import Wrapper from "./Wrapper"
//Card head
import CardHead from "./CardHead"
import Heading from "./Heading"
import IconWrapper from "./IconWrapper"
//Card body
import CardBody from "./CardBody"
import Texts from "./Texts"
import Text from "./Text"
import MoreInfoText from "./MoreInfoText"

const Card = ({ heading, icon, texts }) => {
  const getIcon = icon => {
    switch (icon) {
      case "mom":
        return <MomIcon />
      case "shield":
        return <ShieldIcon />
      case "heart":
        return <HeartIcon />
      case "design":
        return <DesignIcon />
      default:
        return <MomIcon />
    }
  }

  return (
    <Wrapper href="/#">
      <CardHead className="card-head">
        <Heading>{heading}</Heading>
        <IconWrapper className="icon-wrapper">{getIcon(icon)}</IconWrapper>
      </CardHead>
      <CardBody>
        <Texts>
          {texts.map(text => {
            return <Text>{text}</Text>
          })}
        </Texts>
        <MoreInfoText>MORE INFORMATION</MoreInfoText>
      </CardBody>
    </Wrapper>
  )
}

export default Card
