import React from "react"

//Styled components imports
import Wrapper from "./Wrapper"
import Container from "./Container"
import Nav from "./Nav"
import NavList from "./NavList"
import NavItem from "./NavItem"
import Link from "./Link"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <NavList>
            <NavItem>
              <Link
                href="javascript:if(window.print)window.print()"
                title="Print"
              >
                Print
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#" title="GDPR">
                Data Protection (GDPR)
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#" title="LINET Americas" last>
                LINET Americas
              </Link>
            </NavItem>
          </NavList>
        </Nav>
        <Copyright>&copy; 2020 LINET. All rights reserved.</Copyright>
      </Container>
    </Wrapper>
  )
}

export default Footer
