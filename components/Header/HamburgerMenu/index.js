import React, { useContext } from "react"

//Contexts imports
import { MenuContext } from "../../../contexts/MenuContext"

//React components imports
import MobileNav from "./MobileNav"

//Styled components imports
import Hamburger from "./Hamburger"
import Line from "./Line"
import Wrapper from "./Wrapper"

const HamburgerMenu = ({ homepage }) => {
  const [menuOpen, setMenuOpen] = useContext(MenuContext)

  return (
    <Wrapper>
      <Hamburger
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <Line open={menuOpen} firstLine />
        <Line open={menuOpen} secondLine />
        <Line open={menuOpen} thirdLine />
      </Hamburger>

      <MobileNav open={menuOpen} />
    </Wrapper>
  )
}

export default HamburgerMenu
