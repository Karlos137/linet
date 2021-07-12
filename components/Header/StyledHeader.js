import styled from "styled-components"

const StyledHeader = styled.header`
  max-width: 1460px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto 0;

  @media (${props => props.theme.mediaQueries.lg}) {
    margin: 35px auto 0;
  }
`

export default StyledHeader
