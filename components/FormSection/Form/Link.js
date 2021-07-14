import styled from "styled-components"

const Link = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export default Link
