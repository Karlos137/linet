import styled from "styled-components"

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 48px;

  @media (${props => props.theme.mediaQueries.lg}) {
    font-size: 40px;
    margin-bottom: 65px;
  }
`

export default Heading
