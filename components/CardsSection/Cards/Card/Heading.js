import styled from "styled-components"

const Heading = styled.h3`
  font-size: 26px;
  font-weight: 900;
  max-width: 245px;
  padding-top: 141px;
  color: ${props => props.theme.colors.text};
  transition: color 0.15s ease-in;
`

export default Heading
