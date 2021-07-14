import styled, { css } from "styled-components"

const mailUs = css`
  padding-bottom: 20px;
  border-bottom: 1px solid #d2d2d2;
  max-width: 463px;
  margin: 48px auto 0 !important;

  @media (${props => props.theme.mediaQueries.md}) {
    margin: 76px auto 0 !important;
  }
`

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 32px;
  text-align: center;

  @media (${props => props.theme.mediaQueries.md}) {
    font-size: 28px;
    margin-bottom: 41px;
  }

  ${props => props.mailUs && mailUs}
`

export default Heading
