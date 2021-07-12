import styled from "styled-components"

const NavItem = styled.li`
  margin-bottom: 1.5rem;
  margin-top: ${props => props.contact && "3rem"};
  text-align: left;
`

export default NavItem
