import styled from "styled-components"

const Contact = styled.a`
  padding: 15px 12px;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${props =>
    props.visible ? "translateX(0)" : "translateX(200px)"};
  flex-direction: column;
  align-items: center;
  min-width: ${props => (props.phone ? "78px" : "70px")};
  border-right: ${props => props.phone && "1px solid #BF2119"};
  background-color: ${props => props.theme.colors.main};
`

export default Contact
