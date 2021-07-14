import React, { useContext, useEffect } from "react"

import breakpoints from "../../../../utils/breakpoints"

//Contexts imports
import { MenuContext } from "../../../../contexts/MenuContext"

//React components imports
import Logo from "../../Logo"

//Styled components imports
import Wrapper from "./Wrapper"
import Nav from "./Nav"
import NavList from "./NavList"
import NavItem from "./NavItem"
import NavLink from "./NavLink"
import Link from "./Link"

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useContext(MenuContext)

  useEffect(() => {
    //Set overflow: hidden to body when menu open
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    //Close menu when inner width > lg
    function handleResize() {
      if (window.innerWidth > breakpoints.lg) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
  }, [menuOpen])

  return (
    <Wrapper menuOpen={menuOpen}>
      <Logo />
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/">
              <Link
                onClick={() => {
                  setMenuOpen(false)
                }}
                title="WHY OUR BIRTHING BED"
              >
                WHY OUR BIRTHING BED
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              <Link
                onClick={() => {
                  setMenuOpen(false)
                }}
                title="DISCOVER AVE 2"
              >
                DISCOVER AVE 2
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              <Link
                onClick={() => {
                  setMenuOpen(false)
                }}
                title="TRAINING"
              >
                TRAINING
              </Link>
            </NavLink>
          </NavItem>
          <NavItem contact>
            <Link
              title="CONTACT ME"
              href="mailto:info@linetamericas.com?subject=LINET%20example"
            >
              CONTACT ME
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  )
}

export default MobileNav
