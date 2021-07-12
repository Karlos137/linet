import styled from "styled-components"

const ButtonsContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-bottom: 36px;

  @media (${props => props.theme.mediaQueries.lg}) {
    margin-bottom: 116px;
    margin-top: 59px;
  }

  @media (${props => props.theme.mediaQueries.xl}) {
    flex-direction: row;
  }
`

export default ButtonsContainer
