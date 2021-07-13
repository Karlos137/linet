import styled from "styled-components"

const Container = styled.div`
  max-width: 1472px;
  padding: 48px 25px 64px;
  margin: 0 auto;

  @media (${props => props.theme.mediaQueries.lg}) {
    padding: 67px 25px 96px;
  }
`

export default Container
