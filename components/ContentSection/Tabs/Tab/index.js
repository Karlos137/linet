import React from "react"

//React components imports
//Icons
import MomIcon from "../../../Icons/MomIcon"
import ShieldIcon from "../../../Icons/ShieldIcon"
import HeartIcon from "../../../Icons/HeartIcon"
import DesignIcon from "../../../Icons/DesignIcon"

//Styled components imports
import Wrapper from "./Wrapper"
import IconWrapper from "./IconWrapper"
import Text from "./Text"

const Tab = ({ text, icon, active }) => {
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
    <Wrapper>
      <IconWrapper>{getIcon(icon)}</IconWrapper>
      <Text className="tab-text" active={active}>
        {text}
      </Text>
    </Wrapper>
  )
}

export default Tab
