import styled from "styled-components"

const Image = styled.img`
  transition: transform 0.3s ease-in-out;
  transform: ${props =>
    props.arrow && !props.visible ? "rotate(180deg)" : "rotate(0)"};
`

export default Image
