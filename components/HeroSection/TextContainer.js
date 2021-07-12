import styled from "styled-components"

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 48px;
  align-items: center;

  @media (${props => props.theme.mediaQueries.lg}) {
    align-items: flex-start;
  }
`

export default TextContainer
