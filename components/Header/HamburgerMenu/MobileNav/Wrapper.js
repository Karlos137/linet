import styled from "styled-components"

const Wrapper = styled.div`
  transform: ${props =>
    props.menuOpen ? "translateX(0)" : "translateX(100%)"};
  color: #fff;
  background: ${props => props.theme.colors.main};
  text-transform: uppercase;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  color: #fff;
  padding: 25px 25px 0;
  overflow: auto;
`

export default Wrapper
