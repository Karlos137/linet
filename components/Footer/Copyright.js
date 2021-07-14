import styled from "styled-components"

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 300;
  text-align: center;

  @media (${props => props.theme.mediaQueries.md}) {
    text-align: right;
  }
`

export default Copyright
