import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 74px;
  row-gap: 16px;
  column-gap: 16px;

  @media (${props => props.theme.mediaQueries.xl}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0px;
  }
`

export default Wrapper
