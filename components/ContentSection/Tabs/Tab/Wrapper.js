import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  &:hover {
    .tab-text {
      &::after {
        height: 3px;
        width: 100%;
        background-color: ${props => props.theme.colors.main};
      }
    }
  }
`

export default Wrapper
