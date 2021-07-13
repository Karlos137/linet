import styled from "styled-components"

const Wrapper = styled.section`
  max-width: 1460px;
  padding: 0 25px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 34px;

  @media (min-width: 850px) {
    grid-template-columns: auto 508px;
  }

  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Wrapper
