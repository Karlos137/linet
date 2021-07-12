import React from "react"
import { Media } from "../../utils/media"

//React components imports
import Logo from "./Logo"
import HamburgerMenu from "./HamburgerMenu"
import DesktopNav from "./DesktopNav"

//Styled components imports
import StyledHeader from "./StyledHeader"

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Media greaterThanOrEqual="lg">
        <DesktopNav />
      </Media>

      <Media lessThan="lg">
        <HamburgerMenu />
      </Media>
    </StyledHeader>
  )
}

export default Header
