import styled from "styled-components"

const Wrapper = styled.section`
  max-width: 1460px;
  padding: 0 25px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 34px;

  @media (${props => props.theme.mediaQueries.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Wrapper
