import styled from "styled-components"

const Text = styled.p`
  max-width: 580px;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  margin: 21px auto 0;

  @media (${props => props.theme.mediaQueries.lg}) {
    font-size: 26px;
    margin: 0;
    margin-top: 21px;
    text-align: left;
  }
`

export default Text
