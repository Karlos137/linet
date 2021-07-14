import styled from "styled-components"

const Heading = styled.h2`
  font-size: 45px;
  font-weight: 900;
  text-align: center;

  @media (${props => props.theme.mediaQueries.lg}) {
    font-size: 60px;
    text-align: left;
  }
`

export default Heading
