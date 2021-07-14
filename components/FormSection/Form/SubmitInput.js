import styled from "styled-components"

const SubmitInput = styled.input`
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  border: none;
  padding: 23px 70px 22px;
  background-color: ${props => props.theme.colors.main};
  cursor: pointer;

  &:hover {
    background-color: #c61017;
  }

  @media (${props => props.theme.mediaQueries.md}) {
    padding: 23px 81px 22px;
  }
`

export default SubmitInput
