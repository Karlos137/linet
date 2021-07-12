import styled from "styled-components"

const Button = styled.a`
  color: #fff;
  display: block;
  background-color: ${props => props.theme.colors.main};
  padding: 21px;
  width: 265px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #c61017;
  }
`

export default Button
