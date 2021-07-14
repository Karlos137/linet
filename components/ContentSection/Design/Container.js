import styled, { css } from "styled-components"

const first = css`
  justify-content: flex-end;
`

const second = css`
  margin-top: 48px !important;

  @media (${props => props.theme.mediaQueries.md}) {
    margin-top: 330px !important;
  }

  @media (${props => props.theme.mediaQueries.xl}) {
    margin-top: 32px !important;
  }
`

const third = css`
  justify-content: flex-end;
  margin-top: 48px !important;

  @media (${props => props.theme.mediaQueries.md}) {
    margin-top: 145px !important;
  }

  @media (${props => props.theme.mediaQueries.xl}) {
    margin-top: 35px !important;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 15px;

  @media (${props => props.theme.mediaQueries.md}) {
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  ${props => props.first && first}
  ${props => props.second && second}
  ${props => props.third && third}
`

export default Container
