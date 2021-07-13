import styled from "styled-components"

const Button = styled.button`
  background-color: #a41e17;
  width: 30px;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: #c61017;
  }
`

export default Button
