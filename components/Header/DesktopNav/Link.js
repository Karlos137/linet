import styled, { css } from "styled-components"

const contact = css`
  display: flex;
  gap: 16px;
  color: ${props => props.theme.colors.main};
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.main};
  padding: 12px 16px;
  align-items: center;
  transition: background-color 0.15s ease-out;

  &:hover {
    background-color: ${props => props.theme.colors.main};
    color: #fff;

    svg {
      path {
        fill: #fff;
      }
    }
  }
`

const Link = styled.a`
  &:hover {
    color: ${props => props.theme.colors.main};
  }
  ${props => props.contact && contact}
`

export default Link
