import styled from "styled-components"

const Link = styled.a`
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  color: ${props => props.theme.colors.text};
  margin: auto;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media (${props => props.theme.mediaQueries.md}) {
    font-size: 28px;
  }
`

export default Link
