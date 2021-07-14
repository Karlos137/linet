import styled from "styled-components"

const IconWrapper = styled.div`
  text-align: center;

  @media (${props => props.theme.mediaQueries.lg}) {
    text-align: left;
    padding-left: 8px;
  }

  svg {
    width: 65px;
    height: 61px;
    margin-bottom: 21px;

    path {
      fill: ${props => props.theme.colors.main};
    }
  }
`

export default IconWrapper
