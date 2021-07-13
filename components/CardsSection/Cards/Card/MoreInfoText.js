import styled from "styled-components"

const MoreInfoText = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  padding-left: 79px;
  color: ${props => props.theme.colors.text};

  &::before {
    content: url("/arrow-down-icon.svg");
    position: absolute;
    left: 43px;
    top: 0;
    display: inline-block;
  }
`

export default MoreInfoText
