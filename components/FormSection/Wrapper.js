import styled from "styled-components"

const Wrapper = styled.div`
  background: #eaeaea;
  padding: 32px 25px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.xl}) {
    padding: 60px 25px 50px;
    background: #eaeaea url("form-bg.png") left bottom no-repeat;
  }
`

export default Wrapper
