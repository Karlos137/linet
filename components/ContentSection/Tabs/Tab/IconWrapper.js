import styled from "styled-components"

const IconWrapper = styled.div`
  margin-bottom: 16px;

  @media (${props => props.theme.mediaQueries.md}) {
    margin-bottom: 24px;
  }

  svg {
    path {
      fill: #dfdfdf;
    }
  }
`

export default IconWrapper
