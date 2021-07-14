import styled, { css } from "styled-components"

const first = css`
  &::after {
    top: -90px;
    left: -51px;
  }
`

const second = css`
  max-width: 190px;

  &::after {
    content: url("/design-bg-2.svg");
    top: -147px;
    left: -45px;
  }
`

const third = css`
  max-width: 157px;

  &::after {
    content: url("/design-bg-3.svg");
    top: -47px;
    left: -45px;
  }
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 900;
  position: relative;

  &::before {
    content: url("/check-icon-big.svg");
    display: block;
    margin-bottom: 27px;
    z-index: 2;
  }

  &::after {
    content: url("/design-bg-1.svg");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: none;
  }

  @media (${props => props.theme.mediaQueries.md}) {
    &::after {
      display: block;
    }
  }

  ${props => props.first && first}
  ${props => props.second && second}
  ${props => props.third && third}
`

export default Text
