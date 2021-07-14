import styled from "styled-components"

const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 15px 21px;
  border: 1px solid #000000;
  background-color: #fff;

  &::placeholder {
    color: #4c4c4c;
    font-size: 14px;
    font-weight: 300;
  }
`

export default Input
