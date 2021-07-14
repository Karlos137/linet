import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 64px;

  @media (${props => props.theme.mediaQueries.md}) {
    margin-top: 202px;
  }
`

export default Wrapper
