import styled from "styled-components"

const Container = styled.div`
  max-width: 1415px;
  margin: auto;
  padding: 25px 5px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media (${props => props.theme.mediaQueries.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px 25px;
  }
`

export default Container
