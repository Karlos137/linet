import styled from "styled-components"

const Link = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 300;
  padding: 6px 12px;
  display: inline-block;
  border-right: ${props =>
    props.last ? "none" : "1px solid rgba(255, 255, 255, 0.5)"};

  &:hover {
    color: #fff;
  }

  @media (${props => props.theme.mediaQueries.md}) {
    padding: 6px 27px;
    font-size: 14px;
  }
`

export default Link
