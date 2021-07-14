import React from "react"

//React components imports
import MailIcon from "./MailIcon"

//Styled components imports
import Wrapper from "./Wrapper"
import Nav from "./Nav"
import NavList from "./NavList"
import NavItem from "./NavItem"
import NavLink from "./NavLink"
import Link from "./Link"

const DesktopNav = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/">
              <Link title="WHY OUR BIRTHING BED">WHY OUR BIRTHING BED</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#discover">
              <Link title="DISCOVER AVE 2">DISCOVER AVE 2</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              <Link title="TRAINING">TRAINING</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <Link
              href="mailto:info@linetamericas.com?subject=LINET%20example"
              title="CONTACT ME"
              contact
            >
              <MailIcon />
              CONTACT ME
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  )
}

export default DesktopNav
