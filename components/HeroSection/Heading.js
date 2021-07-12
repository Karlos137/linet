import styled from "styled-components"

const Heading = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 45px;
  max-width: 500px;
  font-weight: 900;
  text-align: center;

  @media (${props => props.theme.mediaQueries.lg}) {
    font-size: 60px;
    text-align: left;
  }
`

export default Heading
