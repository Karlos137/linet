import styled from "styled-components"

const ImageContainer = styled.div`
  @media (${props => props.theme.mediaQueries.md}) {
    padding-right: 25px;
  }
`

export default ImageContainer
