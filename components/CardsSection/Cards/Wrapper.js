import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 37px;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (${props => props.theme.mediaQueries.md}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 741px;
  }

  @media (min-width: 1472px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1422px;
  }
`

export default Wrapper
