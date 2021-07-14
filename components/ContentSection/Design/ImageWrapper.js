import styled, { css } from "styled-components"

const first = css`
  @media (${props => props.theme.mediaQueries.md}) {
    margin-left: 235px;
    margin-top: -204px;
  }
`

const second = css`
  @media (${props => props.theme.mediaQueries.md}) {
    margin-left: -26px;
    margin-top: -242px;
  }
`

const third = css`
  @media (${props => props.theme.mediaQueries.md}) {
    margin-left: -115px;
    margin-top: 25px;
  }
`

const ImageWrapper = styled.div`
  ${props => props.first && first}
  ${props => props.second && second}
  ${props => props.third && third}
`

export default ImageWrapper
