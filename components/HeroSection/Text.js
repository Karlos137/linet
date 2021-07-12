import styled from "styled-components"

const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-top: 20px;
  max-width: 445px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.lg}) {
    font-size: 26px;
    text-align: left;
  }
`

export default Text
