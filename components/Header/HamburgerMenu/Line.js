import styled, { css } from "styled-components"

const firstLine = css`
  transform: rotate(45deg) translateY(8px);
`

const secondLine = css`
  transform: translateX(100%);
  opacity: 0;
`

const thirdLine = css`
  transform: rotate(-45deg) translateY(-8px);
`

const Line = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${props => (props.open ? "#fff" : props.theme.colors.main)};

  transform: rotate(0) translateX(0);
  opacity: 1;
  transition: all 0.25s ease-in-out;

  ${props => props.firstLine && props.open && firstLine}
  ${props => props.secondLine && props.open && secondLine}
  ${props => props.thirdLine && props.open && thirdLine}
`

export default Line
