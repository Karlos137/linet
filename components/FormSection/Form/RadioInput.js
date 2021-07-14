import styled from "styled-components"

const RadioInput = styled.input`
  display: inline-block;
  margin-left: 0;
  margin-right: 12px;
  margin-bottom: 8px;
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  position: relative;
  top: 2px;

  &:checked {
    border-color: #000 !important;
  }

  &:checked:after {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    z-index: 2;
    position: relative;
    background-color: ${props => props.theme.colors.main};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid #fff;
  }
`

export default RadioInput
